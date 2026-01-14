"use client";

import { useParams } from "next/navigation";

const teamProfiles: Record<string, {
  name: string;
  role: string;
  bio: string;
  headshot: string;
  linkedin: string;
  instagram: string;
}> = {
  "sarina-mohammadi": {
    name: "Sarina Mohammadi",
    role: "Founder",
    bio: "Placeholder",
    headshot: "/sarina.jpg",
    linkedin: "https://www.linkedin.com/in/sarinamoh/",
    instagram: "https://www.instagram.com/sarinamohammadi.official",
  },
  "opekeresam-miebaka": {
    name: "Opekeresam Miebaka",
    role: "Business Advocate",
    bio: "Opekeresam Miebaka passionate about youth development and entrepreneurship, with a strong interest in empowering young people to grow, lead, and create sustainable opportunities. She is driven by the belief that access to the right information, mentorship and platforms can transform young entrepreneurs and communities.",
    headshot: "/opekeresam.jpeg",
    linkedin: "https://www.linkedin.com/in/opekeresam-mie/",
    instagram: "https://instagram.com/",
  },
  "oduro-yeboah": {
    name: "Oduro Yeboah",
    role: "Market Researcher",
    bio: " My professional journey encompasses a strong commitment to education, health advocacy, and community impact. As a Campus Ambassador for Thrive Africa at KNUST, I spent a year promoting digital literacy and professional development courses, helping students build essential skills for the modern workforce. In my role as National Director for the Ghana Chapter of JSAO, I lead initiatives focused on raising awareness about cancer and mental health, having previously served as Programs Manager. I am also passionate about STEM education and have served as a tutor for a virtual lecture series on advancements in cancer treatment for senior high school students. Through these diverse experiences, I am dedicated to leveraging research, education, and advocacy to drive meaningful change in communities.",
    headshot: "/oduro.jpg",
    linkedin: "https://www.linkedin.com/in/oduro-y-6b61472a2/",
    instagram: "https://instagram.com/",
  },
  // Add more profiles here
};

export default function ProfilePage() {
  const params = useParams();
  const { id } = params;

  const profile = teamProfiles[id as string];

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <div className="w-48 h-48 relative rounded-full mx-auto mb-4 overflow-hidden">
          <Image
            src={profile.headshot}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">{profile.name}</h1>
        <h2 className="text-xl text-center text-gray-600 mb-4">
          {profile.role}
        </h2>
        <p className="text-center text-gray-700 mb-6">{profile.bio}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
