import React from "react";
import Head from "next/head";
import CourseLayout from "../../../components/CourseLayout";

const IntroToPython: React.FC = ({}) => {
  return (
    <>
      <Head>
        <title>Intro to Python</title>
      </Head>
      <CourseLayout
        title="Intro to Python Programming: Mastering the Basics 🐍"
        tutor="Mihir Malaviya"
        date="July 26 2023 - September 27 2023"
        image="/pythonbg.jpg"
        
    classDates={ [
      "July 26",
      "August 2",
      "August 9", 
      "August 16",
      "August 23",
      "August 30",
      "September 6",
      "September 13",
      "September 20",
      "September 27"
    ]}
      >
        <p>
          Unlock the power of programming with our comprehensive course on the
          fundamentals of Python. Designed for beginners, this course offers an
          immersive learning experience that equips you with the essential
          knowledge and skills to harness the versatility of Python. Through a
          combination of interactive lectures, hands-on coding exercises, and
          practical projects, you will gain a solid foundation in Python syntax,
          data types, variables, conditionals, loops, functions, and file
          handling. Discover how to manipulate data, solve problems
          algorithmically, and automate tasks, all while adhering to best coding
          practices. By the end of this course, you will have the confidence and
          competence to write efficient and readable Python code, paving the way
          for your exciting journey into the world of programming. Whether you
          aspire to build web applications, analyze data, or explore artificial
          intelligence, this course is your gateway to realizing your coding
          ambitions.
        </p>
      </CourseLayout>
    </>
  );
};

export default IntroToPython;
