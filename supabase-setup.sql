
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS public.founders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text,
  bio text,
  approved boolean NOT NULL DEFAULT false,
  submitted_by uuid NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_founders_created_at ON public.founders (created_at DESC);

ALTER TABLE public.founders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "founders_select_public_approved" ON public.founders
  FOR SELECT
  USING (approved = true);

CREATE POLICY "founders_select_auth" ON public.founders
  FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "founders_insert_public" ON public.founders
  FOR INSERT
  WITH CHECK (
    -- only allow inserts where approved is not true (always false or null on insert)
    coalesce(approved, false) = false
  );

CREATE POLICY "founders_update_auth" ON public.founders
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "founders_delete_auth" ON public.founders
  FOR DELETE
  USING (auth.role() = 'authenticated');

ALTER TABLE public.founders
  ADD COLUMN IF NOT EXISTS moderated_by uuid NULL;

CREATE INDEX IF NOT EXISTS idx_founders_approved ON public.founders (approved);

CREATE OR REPLACE FUNCTION public.get_founder_certificate(f_id uuid)
RETURNS text LANGUAGE sql STABLE AS $$
  SELECT
    format(
      '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Inter,Arial,sans-serif;background:#fff;color:#0b2545} .card{max-width:800px;margin:40px auto;padding:36px;border:1px solid #e6eef8;border-radius:8px;text-align:center} .logo{height:48px;margin-bottom:18px} .avatar{width:160px;height:160px;border-radius:50%%;object-fit:cover;margin:0 auto 16px} .name{font-size:24px;font-weight:700;color:#000080} .meta{color:#4b5563}</style></head><body><div class="card"> <div class="logo">Youth Forge</div> <img class="avatar" src="%s" alt="%s"/> <div class="name">%s</div> <div class="meta">%s</div> <p style="margin-top:18px;">This certifies that <strong>%s</strong> is featured on the Youth Forge Founders Wall.</p></div></body></html>',
      -- use a deterministic DiceBear identicon generated from the founder's name
      coalesce((
        CASE
          WHEN (select name from public.founders where id = f_id) IS NULL THEN ''
          ELSE ('https://api.dicebear.com/8.x/identicon/svg?seed=' || replace((select name from public.founders where id = f_id), ' ', '%20') || '&background=%23E5E7EB')
        END
      ), ''),
      coalesce((select name from public.founders where id = f_id), ''),
      coalesce((select name from public.founders where id = f_id), ''),
      coalesce((select title from public.founders where id = f_id), '') ,
      coalesce((select name from public.founders where id = f_id), '')
    )
  ;
$$;



