"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import StaticLogo from "@/components/StaticLogo";

type Founder = {
  id?: string;
  name: string;
  title?: string;
  bio?: string;
  image_url?: string;
  created_at?: string;
};

export default function FoundersPage() {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selected, setSelected] = useState<Founder | null>(null);

  // Form state
  const nameRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const bioRef = useRef<HTMLTextAreaElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchFounders();
  }, []);

  async function fetchFounders() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("founders").select("*").order("created_at", { ascending: false }).limit(50);
      if (error) throw error;
      setFounders((data || []) as Founder[]);
      if ((data || []).length > 0) setSelected((data as Founder[])[0]);
    } catch (err) {
      console.error("Error fetching founders", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value?.trim();
    if (!name) return alert("Please enter a name");

    setSubmitting(true);
    try {
      let imageUrl: string | undefined;
      const file = fileRef.current?.files?.[0];
      if (file) {
        const filePath = `founders/${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase.storage.from("founders").upload(filePath, file, { cacheControl: "3600", upsert: false });
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from("founders").getPublicUrl(filePath);
        imageUrl = data.publicUrl;
      }

      const payload = {
        name,
        title: titleRef.current?.value || null,
        bio: bioRef.current?.value || null,
        image_url: imageUrl || null,
      };

      const { data: insertData, error: insertError } = await supabase.from("founders").insert([payload]).select().single();
      if (insertError) throw insertError;

      // Prepend new founder to state and select it
      setFounders((prev) => [insertData as Founder, ...prev]);
      setSelected(insertData as Founder);

      // clear form
      if (nameRef.current) nameRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
      if (bioRef.current) bioRef.current.value = "";
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("Error submitting — check console for details");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white py-12 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <StaticLogo />
            </div>
            <h1 className="text-2xl font-bold" style={{ color: "#000080" }}>Founders Wall</h1>
          </div>
          <p className="text-sm text-gray-600">Add your profile to our Founders Wall</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <section className="col-span-1 bg-gray-50 rounded p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Submit your profile</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Full name</label>
                <input ref={nameRef} className="w-full rounded border px-3 py-2" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Title / Role</label>
                <input ref={titleRef} className="w-full rounded border px-3 py-2" placeholder="Founder, CEO" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Short bio</label>
                <textarea ref={bioRef} className="w-full rounded border px-3 py-2" rows={4} placeholder="One-sentence bio" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo (square recommended)</label>
                <input ref={fileRef} type="file" accept="image/*" className="w-full" />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#000080] text-white rounded disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                <button type="button" className="text-sm text-gray-500" onClick={() => { if (nameRef.current) nameRef.current.value = ""; if (titleRef.current) titleRef.current.value = ""; if (bioRef.current) bioRef.current.value = ""; if (fileRef.current) fileRef.current.value = ""; }}>Clear</button>
              </div>
            </form>

            <p className="mt-4 text-xs text-gray-500">By submitting you agree your profile may be displayed publicly on this site.</p>
          </section>

          {/* Middle: Template preview (auto-updates) */}
          <section className="col-span-1 lg:col-span-1 bg-white rounded p-6 shadow-sm flex flex-col items-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-3">Preview</h3>
            <div className="w-full max-w-md border rounded p-4 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {selected?.image_url ? (
                  // use next/image for optimized rendering
                  <Image src={selected.image_url} alt={selected.name} width={320} height={320} className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-400">No image</div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold">{selected?.name || "Name"}</h4>
                <p className="text-sm text-gray-600">{selected?.title || "Title"}</p>
                <p className="mt-2 text-sm text-gray-700">{selected?.bio || "Short bio appears here after submission."}</p>
              </div>
              <div className="mt-4 w-full">
                <div className="text-xs text-gray-500">Certificate Preview</div>
                <div className="mt-2 border rounded p-3 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10">
                      <StaticLogo />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Founder</div>
                      <div className="text-xs text-gray-500">Youth Forge</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    This certifies that <strong>{selected?.name || "—"}</strong> is featured on the Youth Forge Founders Wall.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right: Grid of founders */}
          <section className="col-span-1 lg:col-span-1">
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">Founders</h3>
            <div className="grid grid-cols-2 gap-3">
              {loading ? (
                <div className="col-span-2">Loading…</div>
              ) : founders.length === 0 ? (
                <div className="col-span-2 text-sm text-gray-500">No founders yet — be the first!</div>
              ) : (
                founders.map((f) => (
                  <button
                    key={f.id || f.name}
                    onClick={() => setSelected(f)}
                    className="flex flex-col items-center gap-2 p-2 rounded hover:bg-gray-50"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                      {f.image_url ? (
                        <Image src={f.image_url} alt={f.name} width={160} height={160} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>
                    <div className="text-xs text-gray-700">{f.name}</div>
                  </button>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
