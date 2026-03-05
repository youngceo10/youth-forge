import TAPSSPClient from "@/components/TAPSSPClient";
import { generateMetadata as seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "TAP Summer Projects Program",
  description:
    "A cross-disciplinary summer mentorship initiative by The Accelerators Program and Youth Forge. Shadow mentors, build real projects, and ship results across tech, policy, research, and more.",
  pathname: "/tap-ssp",
  keywords: [
    "summer projects program",
    "mentorship",
    "The Accelerators Program",
    "TAP",
    "youth internship",
    "shadowing program",
    "quantum computing",
    "policy research",
    "blockchain",
    "community building",
    "youth forge",
  ],
});

export default function Page() {
  return <TAPSSPClient />;
}
