import FoundersClient from '@/components/FoundersClient';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Founders Wall',
  description: 'Share your profile on the Founders Wall — generated avatars only.',
  pathname: '/founders',
});

export default function Page() {
  return <FoundersClient />;
}
