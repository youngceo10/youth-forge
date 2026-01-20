"use client";

import { useEffect, useState } from "react";
import BoringAvatar from "boring-avatars";
import { supabase } from "@/lib/supabase";
import { useRouter } from 'next/navigation';

type Founder = {
  id?: string;
  name: string;
  title?: string;
  bio?: string;
  avatar_url?: string;
  created_at?: string;
};

export default function FoundersPage() {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selected, setSelected] = useState<Founder | null>(null);

  const [draft, setDraft] = useState({ name: '', title: '', bio: '', location: '', website: '', handle: '', skills: '', year: '' });
  const avatarSeeds = ["aurora","marin","rowan","sky","milo","rory","delta","echo","felix","gale","harlow","indie","juno","kai","leo","mira","nova","ori"];
  const palettes: string[][] = [
    ["#E5E7EB","#CBD5E1","#9CA3AF"],["#FFEDD5","#FBD38D","#FB923C"],["#ECFEFF","#67E8F9","#06B6D4"],["#FCE7F3","#F9A8D4","#F472B6"],["#EEF2FF","#C7D2FE","#6366F1"],["#FEF3C7","#FDE68A","#F59E0B"],["#F0F9FF","#BAE6FD","#0284C7"],["#FEF2F2","#FCA5A5","#EF4444"],["#F8FAFC","#E2E8F0","#94A3B8"],["#FFF7ED","#FBD38D","#F97316"],["#F3E8FF","#C4B5FD","#8B5CF6"],["#ECFCCB","#86EFAC","#16A34A"],
  ];
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedPalette, setSelectedPalette] = useState<number>(0);
  const router = useRouter();

  function normalizeNewlines(s?: string | null) { if (!s) return ''; return s.replace(/\\n/g, '\n'); }
  function getTagsFromBio(bio?: string | null) { const safe = normalizeNewlines(bio); const lines = safe.split('\n').map((l) => l.trim()).filter(Boolean); const extras = lines.slice(1).join(' • '); return extras ? extras.split(' • ').map(t => t.trim()).filter(Boolean) : []; }
  function parseStoredAvatar(s?: string | null) { if (!s) return { seed: undefined, palette: palettes[0] }; const parts = s.split("::"); const seed = parts[0] || undefined; const idx = parts[1] ? parseInt(parts[1], 10) : 0; return { seed, palette: palettes[idx] || palettes[0] }; }

  useEffect(() => { fetchFounders(); }, []);
  async function fetchFounders() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("founders").select("*").order("created_at", { ascending: false }).limit(50);
      if (error) throw error;
      setFounders((data || []) as Founder[]);
      if ((data || []).length > 0) setSelected((data as Founder[])[0]);
    } catch (err) {
      console.error("Error fetching founders", err);
    } finally { setLoading(false); }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = draft.name.trim();
    if (!name) return alert("Please enter a name");
    setSubmitting(true);
    try {
      const chosenSeed = selectedAvatar || `${name}-default`;
      const avatarToUse = `${chosenSeed}::${selectedPalette}`;
      const extras: string[] = [];
      if (draft.location) extras.push(`Location: ${draft.location}`);
      if (draft.website) extras.push(`Website: ${draft.website}`);
      if (draft.handle) extras.push(`Handle: ${draft.handle}`);
      if (draft.skills) extras.push(`Skills: ${draft.skills}`);
      if (draft.year) extras.push(`Year: ${draft.year}`);
      const combinedBio = [draft.bio || '', extras.join(' • ')].filter(Boolean).join('\n');
      const payload = { name, title: draft.title || null, bio: combinedBio || null, avatar_url: avatarToUse };
      const { data: insertData, error: insertError } = await supabase.from("founders").insert([payload]).select().single();
      if (insertError) throw insertError;
      setFounders((prev) => [insertData as Founder, ...prev]);
      setSelected(insertData as Founder);
      setDraft({ name: '', title: '', bio: '', location: '', website: '', handle: '', skills: '', year: '' });
      setSelectedAvatar(null);
    } catch (err: any) {
      console.error("Submission error:", err);
      let msg = "Error submitting — check console for details";
      if (!err) { msg = String(err); } else if (err.error) { msg = err.error.message || JSON.stringify(err.error); } else if (err.message) { msg = err.message; } else { try { msg = JSON.stringify(err); } catch (e) { msg = String(err); } }
      alert(msg);
    } finally { setSubmitting(false); }
  }

  return (
    <main className="min-h-screen py-0 px-6 lg:px-12 pb-20" style={{ background: 'linear-gradient(180deg, #000080 0%, #f3f6ff 40%)' }}>
      <div className="max-w-5xl mx-auto">
        <section className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="bg-gradient-to-b from-[#000080] to-[#0b2b5a] rounded-lg p-12 text-white shadow-lg">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>FOUNDERS WALL</h1>
              <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">Celebrate young founders reshaping their communities — share your story, inspire others, and join a global movement of youth-led innovation.</p>
              <div className="mt-6"><a href="#form" className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#000080] font-semibold rounded-lg">Add Your Profile</a></div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded p-4 shadow-sm flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-[#000080] text-white flex items-center justify-center font-semibold">1</div><div><div className="text-sm font-semibold text-[#0b2b5a]">Fill your details</div><div className="text-xs text-gray-600">Name, title and a short one-line bio.</div></div></div>
              <div className="bg-white rounded p-4 shadow-sm flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-[#000080] text-white flex items-center justify-center font-semibold">2</div><div><div className="text-sm font-semibold text-[#0b2b5a]">Select avatar & color</div><div className="text-xs text-gray-600">Choose a generated avatar and palette.</div></div></div>
              <div className="bg-white rounded p-4 shadow-sm flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-[#000080] text-white flex items-center justify-center font-semibold">3</div><div><div className="text-sm font-semibold text-[#0b2b5a]">Preview & submit</div><div className="text-xs text-gray-600">Review your profile, then submit.</div></div></div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <section id="form" className="col-span-1 bg-white rounded-lg p-6 shadow-md border border-gray-100 max-h-[640px] md:max-h-[560px] overflow-y-auto pr-2">
            <h2 className="text-lg font-semibold mb-4">Submit your profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium mb-1">Full name</label><input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000080]" placeholder="Jane Doe" /></div>
              <div><label className="block text-sm font-medium mb-1">Title / Role</label><input value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000080]" placeholder="Founder, CEO" /></div>
              <div><label className="block text-sm font-medium mb-1">Short bio</label><textarea value={draft.bio} onChange={(e) => setDraft({ ...draft, bio: e.target.value })} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#000080]" rows={4} placeholder="One-sentence bio" /></div>
              <div>
                <div className="text-sm font-medium mb-2">Choose an avatar</div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {avatarSeeds.map((s) => {
                    const nameSeed = (draft.name || "anonymous") + "-" + s;
                    const isSelected = selectedAvatar === nameSeed;
                    return (
                      <button key={s} type="button" onClick={() => setSelectedAvatar(nameSeed)} className={`w-12 h-12 rounded overflow-hidden flex items-center justify-center border ${isSelected ? 'ring-2 ring-[#000080] border-transparent' : 'border-transparent'}`}>
                        <BoringAvatar size={48} name={nameSeed} variant="beam" colors={palettes[selectedPalette]} />
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3">
                  <div className="text-sm font-medium mb-2">Pick a color palette</div>
                  <div className="flex gap-2 items-center overflow-x-auto py-1 -mx-1 px-1">
                    {palettes.map((p, idx) => (
                      <button key={idx} type="button" onClick={() => setSelectedPalette(idx)} aria-label={`Select palette ${idx + 1}`} className={`min-w-[78px] flex items-center gap-1 p-1 rounded border ${selectedPalette === idx ? 'ring-2 ring-[#000080] border-transparent' : 'border-gray-200'}`}>
                        <div className="w-6 h-6 rounded-sm" style={{ background: p[0] }} />
                        <div className="w-6 h-6 rounded-sm" style={{ background: p[1] }} />
                        <div className="w-6 h-6 rounded-sm" style={{ background: p[2] }} />
                      </button>
                    ))}
                  </div>
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <input value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} placeholder="Location (City, Country)" className="w-full rounded-md border border-gray-200 px-3 py-2" />
                <input value={draft.website} onChange={(e) => setDraft({ ...draft, website: e.target.value })} placeholder="Website (https://...)" className="w-full rounded-md border border-gray-200 px-3 py-2" />
                <input value={draft.handle} onChange={(e) => setDraft({ ...draft, handle: e.target.value })} placeholder="Social handle (e.g. @you)" className="w-full rounded-md border border-gray-200 px-3 py-2" />
                <input value={draft.skills} onChange={(e) => setDraft({ ...draft, skills: e.target.value })} placeholder="Skills (comma separated)" className="w-full rounded-md border border-gray-200 px-3 py-2" />
                <input value={draft.year} onChange={(e) => setDraft({ ...draft, year: e.target.value })} placeholder="Founding year / Year" className="w-full rounded-md border border-gray-200 px-3 py-2" />
              </div>
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-[#000080] text-white rounded-md disabled:opacity-60 transition-shadow hover:shadow-lg" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</button>
                <button type="button" className="text-sm text-gray-500" onClick={() => { setDraft({ name: '', title: '', bio: '', location: '', website: '', handle: '', skills: '', year: '' }); setSelectedAvatar(null); }}>Clear</button>
              </div>
            </form>
            <p className="mt-4 text-xs text-gray-500">By submitting you agree your profile may be displayed publicly on this site.</p>
          </section>

          <section className="col-span-1 lg:col-span-1 bg-transparent rounded-lg p-6 flex flex-col items-start self-start">
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-3">Preview</h3>
            <div className="w-full max-w-md rounded-2xl p-4 flex flex-col items-center bg-white/90 backdrop-blur-sm max-h-[420px] md:max-h-[360px] overflow-y-auto shadow-lg border border-white/30">
              {/* Preview rendering simplified for brevity */}
              <div className="w-full flex flex-col items-center">
                <div className="rounded-full p-1" style={{ background: `linear-gradient(135deg, ${palettes[selectedPalette][0]} 0%, ${palettes[selectedPalette][2]} 100%)` }}>
                  <div className="rounded-full bg-white p-1">
                    <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center" style={{ boxShadow: `0 18px 40px ${palettes[selectedPalette][2]}22` }}>
                      <BoringAvatar size={140} name={selectedAvatar || 'anonymous'} variant="beam" colors={palettes[selectedPalette]} />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center w-full">
                  <h4 className="text-2xl font-extrabold" style={{ color: palettes[selectedPalette][2] }}>{draft.name || 'Name'}</h4>
                </div>
              </div>
            </div>
          </section>

          <section className="col-span-1 lg:col-span-1 max-h-[640px] md:max-h-[560px] overflow-y-auto pr-2">
            <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">Founders</h3>
            <div className="grid grid-cols-2 gap-4">
              {loading ? (<div className="col-span-2">Loading…</div>) : founders.length === 0 ? (<div className="col-span-2 text-sm text-gray-500">No founders yet — be the first!</div>) : (founders.map((f) => {
                const parsed = parseStoredAvatar(f.avatar_url ?? null);
                return (
                  <button key={f.id || f.name} onClick={() => setSelected(f)} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white hover:shadow-lg transition transform hover:-translate-y-0.5">
                    <div className="-mt-8 w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center" style={{ width: 72, height: 72 }}>
                      <BoringAvatar name={parsed.seed || f.name} size={72} variant="beam" colors={parsed.palette} />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{f.name}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[120px]">{f.title}</div>
                  </button>
                );
              }))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
