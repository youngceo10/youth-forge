-- Full Supabase setup for the "Founders Wall" feature
-- Paste and run this in the Supabase SQL editor (Project → SQL)

-- 1) Ensure UUID helper (pgcrypto) is available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2) Founders table
CREATE TABLE IF NOT EXISTS public.founders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text,
  bio text,
  image_url text,
  approved boolean NOT NULL DEFAULT false,
  submitted_by uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 3) Index for ordering by newest
CREATE INDEX IF NOT EXISTS idx_founders_created_at ON public.founders (created_at DESC);

-- 4) Enable Row Level Security
ALTER TABLE public.founders ENABLE ROW LEVEL SECURITY;

-- 5) Policies
-- Allow public reads ONLY for approved = true
CREATE POLICY "founders_select_public_approved" ON public.founders
  FOR SELECT
  USING (approved = true);

-- Allow authenticated users to select all rows (for admin/moderation)
CREATE POLICY "founders_select_auth" ON public.founders
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow inserts from anonymous or authenticated clients, but force approved = false on insert
-- Note: this policy allows anonymous submissions (useful for public forms). To avoid spam, consider requiring authentication.
CREATE POLICY "founders_insert_public" ON public.founders
  FOR INSERT
  WITH CHECK (
    -- only allow inserts where approved is not true (always false or null on insert)
    coalesce(approved, false) = false
  );

-- Allow updates by authenticated users (used for approving entries or editing by admins)
CREATE POLICY "founders_update_auth" ON public.founders
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Allow deletes by authenticated users only
CREATE POLICY "founders_delete_auth" ON public.founders
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- 6) Optional: add a moderation workflow helper column and index
ALTER TABLE public.founders
  ADD COLUMN IF NOT EXISTS moderated_by uuid NULL;

CREATE INDEX IF NOT EXISTS idx_founders_approved ON public.founders (approved);

-- 7) Helper function: return a simple HTML certificate for a founder
CREATE OR REPLACE FUNCTION public.get_founder_certificate(f_id uuid)
RETURNS text LANGUAGE sql STABLE AS $$
  SELECT
    format(
      '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Inter,Arial,sans-serif;background:#fff;color:#0b2545} .card{max-width:800px;margin:40px auto;padding:36px;border:1px solid #e6eef8;border-radius:8px;text-align:center} .logo{height:48px;margin-bottom:18px} .avatar{width:160px;height:160px;border-radius:50%%;object-fit:cover;margin:0 auto 16px} .name{font-size:24px;font-weight:700;color:#000080} .meta{color:#4b5563}</style></head><body><div class="card"> <div class="logo">Youth Forge</div> <img class="avatar" src="%s" alt="%s"/> <div class="name">%s</div> <div class="meta">%s</div> <p style="margin-top:18px;">This certifies that <strong>%s</strong> is featured on the Youth Forge Founders Wall.</p></div></body></html>',
      coalesce((select image_url from public.founders where id = f_id), ''),
      coalesce((select name from public.founders where id = f_id), ''),
      coalesce((select name from public.founders where id = f_id), ''),
      coalesce((select title from public.founders where id = f_id), '') ,
      coalesce((select name from public.founders where id = f_id), '')
    )
  ;
$$;

-- 8) Notes / Next steps (not executable SQL):
-- - Create a Storage bucket named "founders" in the Supabase Dashboard → Storage.
--   Make it public, or configure signed URL access in your app code.
-- - The client form can upload images to Storage and then store the public URL in `image_url`.
-- - Realtime: Supabase Realtime will broadcast changes to this table automatically.
-- - Security: current policies allow anonymous inserts (public submissions). If you prefer moderation, keep `approved` default false (already set) and require an admin to set `approved = true` before a profile becomes visible.
-- - To require authentication for submissions, remove or tighten the "founders_insert_public" policy and create an insert policy that requires auth.role() = 'authenticated'.

-- 9) Example: mark an entry approved (run as an authenticated user or via admin SQL)
-- UPDATE public.founders SET approved = true, moderated_by = auth.uid(), created_at = now() WHERE id = '<PUT_ID_HERE>';

-- 10) Quick verification: list approved entries
-- SELECT * FROM public.founders WHERE approved = true ORDER BY created_at DESC LIMIT 50;
