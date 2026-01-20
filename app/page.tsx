import HomeClient from '@/components/HomeClient';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Home',
  description: 'Breaking down barriers for young entrepreneurs through research-driven advocacy and community.',
  pathname: '/',
});

export default function Page() {
  return <HomeClient />;
}
