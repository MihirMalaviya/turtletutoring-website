import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";

import CourseCard from "../../components/CourseCard";

const coursesData = [
  {
    title: "Intro to Python Programming: Mastering the Basics 🐍", 
    description: "Unlock the power of programming with our comprehensive course on the fundamentals of Python. Designed for beginners, this course offers an immersive learning experience that equips you with the essential knowledge and skills to harness the versatility of Python. Through a combination of interactive lectures, hands-on coding exercises, and practical projects, you will gain a solid foundation in Python syntax, data types, variables, conditionals, loops, functions, and file handling. Discover how to manipulate data, solve problems algorithmically, and automate tasks, all while adhering to best coding practices. By the end of this course, you will have the confidence and competence to write efficient and readable Python code, paving the way for your exciting journey into the world of programming. Whether you aspire to build web applications, analyze data, or explore artificial intelligence, this course is your gateway to realizing your coding ambitions.",
    tutor: "Mihir Malaviya",
    date: "July 26 2023 - September 27 2023", 
    image: "/pythonbg.jpg",
    href: "./courses/intro-to-python"
  },
  {
    title: "Java Fundamentals ☕",
    description: "Embark on a dynamic journey into the world of Java programming with our comprehensive course on the basics of Java. Whether you're a complete novice or have some prior programming experience, this course provides a solid introduction to Java's core concepts and principles. Through a combination of interactive lessons, hands-on coding exercises, and real-world examples, you will gain a deep understanding of Java syntax, object-oriented programming (OOP) principles, variables, data types, control structures, arrays, and functions. Dive into the intricacies of class and object creation, inheritance, polymorphism, and exception handling, empowering you to write efficient and robust code. By the end of this course, you will possess the skills and confidence to tackle programming challenges, build Java applications, and lay the groundwork for advanced Java development. Join us on this transformative learning journey and unlock the vast potential of Java programming.",
    tutor: "Shreyas Aryah", 
    date: "July 24 2023 - August 21 2023",
    image: "/javabg.jpg",
    href: "#"
  },
  {
    title: "Ottoman Empire 📖", 
    isWebinar: true,
    description: "Embark on a captivating journey through the tumultuous chapters of history as we delve into the rise and ultimate demise of the illustrious Ottoman Empire. This enlightening webinar explores the multifaceted factors and pivotal events that led to the collapse of one of the most powerful and enduring empires in world history. Through a blend of engaging presentations, insightful discussions, and immersive visual aids, participants will gain a comprehensive understanding of the Ottoman Empire's decline. From political intrigues and external pressures to socio-cultural transformations and economic challenges, we will navigate the complex tapestry of influences that ultimately sealed the empire's fate. Join us as we unravel the fascinating narrative of the Ottoman Empire's fall, providing a deeper appreciation for the enduring legacy it left behind.",
    tutor: "Aryan Marri",
    date: "7:30 PM EST",
    image: "/ottomanbg.jpg",
    href: "#"
  }
];

const Courses = () => {

  return (
    <>
      <Head>
        <title>Courses</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>

      <Container className="min-h-screen my-12">

        <h1 className="mb-10">Courses</h1>

        {/* Map over courses data */}
        {coursesData.map(course => (
          <CourseCard 
            key={course.title}
            {...course} 
          />
        ))}

      </Container>
    </>
  );
};

export default Courses;