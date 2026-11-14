import RisingVenturesClient from '@/components/RisingVenturesClient';
import { generateMetadata as seoMetadata } from '@/lib/seo';

export const metadata = seoMetadata({
  title: '#RisingVentures — $15K for Founders',
  description:
    'Youth Forge is giving away $15,000 to startups and NGOs. Judged by Y Combinator founders and OpenAI employees. Applications are now closed. Sign up for our newsletter for updates.
  keywords: [
    'rising ventures',
    'startup funding',
    'youth entrepreneurship',
    'NGO grants',
    '$15k prize',
    'Y Combinator',
    'young founders',
  ],
});

export default function Page() {
  return <RisingVenturesClient />;
}
