import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Sarina Mohammadi",
    role: "Founder",
    headshot: "/sarina.jpg",
    profileLink: "/team/sarina-mohammadi",
  },
  {
    id: 2,
    name: "Opekeresam Miebaka",
    role: "Business Advocate",
    headshot: "/opekeresam.jpeg",
    profileLink: "/team/opekeresam-miebaka",
  },
  {
    id: 3,
    name: "Oduro Yeboah",
    role: "Market Researcher",
    headshot: "/oduro.jpg",
    profileLink: "/team/oduro-yeboah",
  },
  // Add more team members here
];

export default function TeamPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Link href={member.profileLink} key={member.id}>
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition">
              <img
                src={member.headshot}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
