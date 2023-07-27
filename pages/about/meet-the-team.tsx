import React from "react";
import TeamCard from "../../components/TeamCard";
import { Container } from "react-bootstrap";

interface TeamMember {
  imagePath: string;
  name: string;
  position: string;
  email?: string;
  github?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  discord?: string;
}

const MeetTheTeam: React.FC = () => {
  const founders: TeamMember[] = [
    {
      imagePath: "/people/jonathan.png",
      name: "Jonathan Ming-Ran Li",
      position: "Co-President",
      discord: ".jonathan1",
    },
    {
      imagePath: "/people/zaid.png",
      name: "Zaid Ahmed",
      position: "Co-President",
      discord: "crroak",
    },
  ];

  const directors: TeamMember[] = [
    {
      imagePath: "/people/placeholder.png",
      name: "Mihir Malaviya",
      position: "Website creator/maintainer",
      email: "mihirmalaviya1@gmail.com",
      discord: "derpium_",
      github: "https://github.com/MihirMalaviya",
    },
  ];

  const tutors: TeamMember[] = [
    {
      imagePath: "/logo.png",
      name: "John Doe",
      position: "Software Engineer",
      email: "johndoe@example.com",
    },
  ];

  return (
    <Container className="min-h-screen py-10">
      <h1>Meet The Team!</h1>

      <div className="bg-green-50 p-10 my-16 rounded-lg shadow-md !shadow-green-100">
        <h2 className="text-center my-14 text-5xl text-green-500">Founders</h2>

        <div className="flex flex-wrap justify-center">
          {founders.map((founder, index) => (
            <TeamCard key={index} important={2} {...founder} />
          ))}
        </div>
        <p className="text-center mt-10 text-lg">a short description</p>
      </div>

      <h2 className="text-center mt-14 mb-10">Directors</h2>
      <div className="flex flex-wrap justify-center">
        {directors.map((director, index) => (
          <TeamCard key={index} important={1} {...director} />
        ))}
      </div>

      <h2 className="text-center mt-14 mb-10">Tutors</h2>
      <div className="flex flex-wrap justify-center">
        {tutors.map((tutor, index) => (
          <TeamCard key={index} important={0} {...tutor} />
        ))}
      </div>
    </Container>
  );
};

export default MeetTheTeam;
