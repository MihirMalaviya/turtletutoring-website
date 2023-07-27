import React from "react";
import { Container } from "react-bootstrap";

import styles from "../styles/CourseLayout.module.css";

interface CourseLayoutProps {
  title: string;
  tutor: string;
  date: string;
  image: string;
  children: React.ReactNode;
  classDates?: string[];
}

const CourseLayout: React.FC<CourseLayoutProps> = ({
  title,
  tutor,
  date,
  image,
  children,
  classDates,
}) => {
  return (
    <Container className="w-100 mx-auto px-4 py-16">
      {/* <div className={styles.stickyBlur}>
        <img src={image} alt="Image" />
      </div> */}

      <Container className="min-h-screen">
        <div className="w-100 mx-auto">
          {/* Course title */}
          <h1 className="text-stone-800 pb-4 -pl-1">{title}</h1>
          {/* tutor and date */}
            <p className="text-shadow text-stone-600 shadow-stone-100 font-medium pt-1">
              Taught by {tutor}
            </p>
            <p className="text-shadow text-stone-600 shadow-stone-100 font-medium pt-3 pb-3">
              {date}
            </p>
          <hr className="my-4 border-b-2 border-stone-600" />
          {/* <br /> */}
          {/* Course content */}
          <div className="text-shadow-sm shadow-white">{children}</div>

          {classDates && (
            <div className="mt-16">
              <h3 className="font-semibold text-center">Class Dates</h3>

              <div className="mt-4 mb-5 flex flex-col items-center">
                {classDates.map((date) => (
                  <div
                    key={date}
                    className="w-1/3 bg-green-50 text-green-500 border !shadow-sm !shadow-green-200 !border-green-200  my-4 text-center rounded-lg px-3 py-3 mr-2 mb-2 hover:bg-orange-100 hover:!border-orange-200 hover:text-orange-400 hover:!shadow-orange-200 hover:scale-105 hover:!shadow-lg font-medium transition duration-150"
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Go back link */}
      <div className="flex flex-row-reverse">
        <a
          href="../courses"
          className="mx-10 text-green-500 hover:text-yellow-500 hover:!underline ease-in-out duration-200 schib"
        >
          Go Back &rsaquo;
        </a>
      </div>
    </Container>
  );
};

export default CourseLayout;
