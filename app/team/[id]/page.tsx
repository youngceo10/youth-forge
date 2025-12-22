"use client";

import { useParams } from "next/navigation";

const teamProfiles = {
  "sarina-mohammadi": {
    name: "Sarina Mohammadi",
    role: "Founder",
    bio: "Placeholder",
    headshot: "/sarina.jpg",
    linkedin: "https://linkedin.com/in/sarina-mohammadi",
    instagram: "https://instagram.com/sarina.mohammadi",
  },
  "jane-smith": {
    name: "Jane Smith",
    role: "Product Manager",
    bio: "Jane is an experienced product manager who loves building user-centric products.",
    headshot: "/public/jane-smith.jpg",
    linkedin: "https://linkedin.com/in/jane-smith",
    instagram: "https://instagram.com/jane.smith",
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
        <img
          src={profile.headshot}
          alt={profile.name}
          className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
        />
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
