-- Seed file: supabase-seed-founders.sql
-- Adds avatar_url column if missing and inserts 10 sample founders (approved=true for public visibility)

ALTER TABLE public.founders
  ADD COLUMN IF NOT EXISTS avatar_url text NULL;

-- Insert 10 sample founders
INSERT INTO public.founders (id, name, title, bio, avatar_url, approved, created_at)
VALUES
  (gen_random_uuid(), 'Aisha Bello', 'Founder & CEO, KioEd', 'Building accessible edtech for young people.\nLocation: Lagos, Nigeria • Website: https://kioed.ng • Handle: @aishabello • Skills: product,education • Year: 2024', 'aurora::4', true, now()),
  (gen_random_uuid(), 'Mateo Cruz', 'Co‑founder, Forma', 'Design‑led social impact platform connecting youth with mentors.\nLocation: Mexico City, Mexico • Website: https://forma.mx • Handle: @mateocruz • Skills: design,community • Year: 2022', 'marin::2', true, now()),
  (gen_random_uuid(), 'Priya Sharma', 'Founder, ThreadLab', 'Sustainable fashion collective run by youth designers.\nLocation: Bengaluru, India • Website: https://threadlab.org • Handle: @priyash • Skills: fashion,sustainability • Year: 2023', 'rowan::6', true, now()),
  (gen_random_uuid(), 'Jayden Lee', 'Founder, GreenSteps', 'Tools and events for student climate action.\nLocation: Toronto, Canada • Website: https://greensteps.org • Handle: @jaydenlee • Skills: community,organizing • Year: 2021', 'sky::1', true, now()),
  (gen_random_uuid(), 'Sienna Okoro', 'Founder, MakerNest', 'Local makerspace & mentorship for teen creators.\nLocation: Accra, Ghana • Website: https://makernest.africa • Handle: @siennaokoro • Skills: fabrication,workshops • Year: 2024', 'milo::8', true, now()),
  (gen_random_uuid(), 'Omar Hassan', 'Founder, StudentPay', 'Fintech tools tailored to student finances.\nLocation: Cairo, Egypt • Website: https://studentpay.me • Handle: @omarh • Skills: fintech,product • Year: 2022', 'rory::3', true, now()),
  (gen_random_uuid(), 'Mei Lin', 'Founder, TutorAI', 'AI tutoring for after‑school programs and study groups.\nLocation: Singapore • Website: https://tutorai.sg • Handle: @meilin • Skills: ai,education • Year: 2023', 'delta::5', true, now()),
  (gen_random_uuid(), 'Luca Romano', 'Founder, CivicUp', 'Youth‑led civic engagement app with local events.\nLocation: Milan, Italy • Website: https://civicup.it • Handle: @lucaromano • Skills: civictech,events • Year: 2021', 'echo::7', true, now()),
  (gen_random_uuid(), 'Noor Al‑Fayed', 'Founder, TeenHealth', 'Health resources and peer support for teens.\nLocation: Amman, Jordan • Website: https://teenhealth.org • Handle: @nooraf • Skills: health,community • Year: 2024', 'felix::0', true, now()),
  (gen_random_uuid(), 'Zoe Kim', 'Founder, SparkLab', 'Creative workshops and pop‑up events for young artists.\nLocation: Seoul, South Korea • Website: https://sparklab.kr • Handle: @zoekim • Skills: art,eventproduction • Year: 2022', 'gale::9', true, now());

-- END
