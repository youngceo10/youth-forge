-- Youth Forge Blog Table Setup
-- Run this in your Supabase SQL Editor

-- Create the blog table
CREATE TABLE IF NOT EXISTS blog (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  author TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  published BOOLEAN DEFAULT FALSE
);

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog(slug);

-- Create index on published for filtering
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog(published);

-- Enable Row Level Security
ALTER TABLE blog ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published posts
CREATE POLICY "Public read access to published posts"
  ON blog
  FOR SELECT
  USING (published = true);

-- Insert sample blog posts
INSERT INTO blog (title, slug, excerpt, content, featured_image, author, published)
VALUES 
(
  'Breaking Barriers: Teen Entrepreneurs in Canada',
  'breaking-barriers-canada',
  'Our latest research reveals the unique challenges faced by young founders in the Canadian startup ecosystem.',
  '<p>Canada has long been known for its supportive startup ecosystem, but our research reveals that young entrepreneurs under 25 face unique challenges that often go unaddressed.</p><h2>Key Findings</h2><p>Through extensive interviews and surveys with over 150 young founders across Toronto, Vancouver, and Montreal, we''ve identified three critical barriers...</p>',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200',
  'Youth Forge Research Team',
  true
),
(
  'The State of Youth Entrepreneurship in Africa',
  'youth-entrepreneurship-africa',
  'Exploring how young founders in Nigeria, Ghana, and Uganda are building innovative solutions despite systemic challenges.',
  '<p>Africa is home to the youngest population in the world, with a median age of 19.7 years. This demographic dividend presents unprecedented opportunities for entrepreneurship and innovation.</p><h2>Innovation in Action</h2><p>Our research across Lagos, Accra, and Kampala uncovered incredible resilience and creativity among young founders. Despite limited access to funding and mentorship, these entrepreneurs are creating solutions that address local challenges in education, healthcare, and agriculture.</p><h2>Key Challenges</h2><p>Access to capital remains the primary barrier, with only 3% of venture funding in Africa going to founders under 25. Additionally, regulatory barriers and lack of formal business education compound these challenges.</p>',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200',
  'Dr. Amara Okonkwo',
  true
),
(
  'From Idea to Impact: UAE Youth Startup Success Stories',
  'uae-youth-startups',
  'How government support and innovative policies are empowering teenage entrepreneurs in the United Arab Emirates.',
  '<p>The UAE has emerged as a global hub for young entrepreneurs, thanks to progressive government policies and substantial investment in youth innovation programs.</p><h2>Government Support</h2><p>Through initiatives like Mohammed Bin Rashid Establishment for SME Development and Dubai Future Accelerators, young founders receive not just funding, but mentorship, workspace, and access to international markets.</p><h2>Success Stories</h2><p>We interviewed 10 teen founders in Dubai and Abu Dhabi who have successfully scaled their businesses. Common themes include strong family support, access to international education, and government-backed incubation programs.</p>',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200',
  'Fatima Al-Mansouri',
  true
),
(
  'Funding Barriers: Why Investors Overlook Young Founders',
  'funding-barriers-young-founders',
  'Our comprehensive analysis of venture capital trends reveals age-based discrimination in startup funding.',
  '<p>Despite representing 40% of new business owners, founders under 25 receive less than 5% of venture capital funding globally. Our year-long study uncovers the implicit biases and systemic barriers behind this gap.</p><h2>The Age Penalty</h2><p>Investors consistently cite "lack of experience" when passing on young founders, yet our data shows that youth-led startups have comparable or better success rates in their first three years compared to older founders.</p><h2>Breaking Through</h2><p>We identify strategies that successful young founders have used to overcome these barriers, including building strong advisory boards, focusing on traction over credentials, and seeking alternative funding sources like angel investors and crowdfunding.</p>',
  'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200',
  'Michael Chen',
  true
),
(
  'Mentorship Matters: Building Support Networks for Teen Founders',
  'mentorship-matters',
  'Why quality mentorship is the missing piece in youth entrepreneurship ecosystems worldwide.',
  '<p>Our global survey of 500 young entrepreneurs identified mentorship as the #1 resource they wish they had access to when starting their businesses.</p><h2>The Mentorship Gap</h2><p>While funding often dominates conversations about entrepreneurship support, our research shows that founders with dedicated mentors are 3x more likely to successfully scale their businesses past the first year.</p><h2>What Works</h2><p>We profile successful mentorship programs in Japan, Greece, and Pakistan that have created structured support systems for young founders, including peer mentoring, industry expert matching, and reverse mentoring opportunities.</p>',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
  'Sophia Rodriguez',
  true
),
(
  'Policy Innovation: How Greece is Supporting Young Entrepreneurs',
  'greece-youth-policy',
  'A deep dive into new policies making Greece a surprising hub for youth entrepreneurship in Southern Europe.',
  '<p>Despite economic challenges, Greece has introduced innovative policies specifically designed to support entrepreneurs under 25, creating a model that other nations are studying.</p><h2>Policy Highlights</h2><p>The "Youth Entrepreneurship 2025" program provides tax incentives, reduced business registration fees, and guaranteed access to co-working spaces for founders under 25. Early results show a 40% increase in youth-led business registrations.</p><h2>Lessons Learned</h2><p>We interview policymakers and young founders to understand what''s working and what challenges remain in creating truly youth-friendly entrepreneurship ecosystems.</p>',
  'https://images.unsplash.com/photo-1555424681-7744df5035f9?w=1200',
  'Elena Papadopoulos',
  true
),
(
  'Tech for Good: Young Founders Solving Global Challenges',
  'tech-for-good-young-founders',
  'Meet the teenage entrepreneurs using technology to address climate change, education, and healthcare access.',
  '<p>Around the world, young founders are leveraging technology not just for profit, but to solve pressing global challenges. We profile 15 inspiring young entrepreneurs making real impact.</p><h2>Climate Tech Leaders</h2><p>From carbon tracking apps to sustainable fashion marketplaces, teen founders are at the forefront of climate innovation. Many cite growing up with climate anxiety as motivation for their ventures.</p><h2>EdTech Revolution</h2><p>Young founders uniquely understand the gaps in modern education systems. We showcase platforms built by students for students, addressing everything from test prep to career guidance.</p><h2>Healthcare Access</h2><p>In developing markets, young entrepreneurs are using telemedicine, AI diagnostics, and logistics innovations to bring healthcare to underserved communities.</p>',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200',
  'Youth Forge Research Team',
  true
),
(
  'The Legal Maze: Regulatory Challenges for Underage Founders',
  'legal-challenges-underage-founders',
  'How age restrictions in business law create unnecessary barriers for capable young entrepreneurs.',
  '<p>In most countries, individuals under 18 cannot legally sign contracts, open business bank accounts, or register companies without parental consent. These well-intentioned protections often become barriers to youth entrepreneurship.</p><h2>Cross-Country Comparison</h2><p>We analyze business registration laws in 15 countries and identify best practices that balance youth protection with entrepreneurial opportunity.</p><h2>Workarounds and Solutions</h2><p>Young founders share how they navigate legal complexities, from using custodial structures to advocating for policy reform.</p>',
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
  'James Taylor',
  true
);

-- Verify the table was created
SELECT * FROM blog;
