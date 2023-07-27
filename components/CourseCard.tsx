import React, { FC } from "react";
import styles from "../styles/CourseCard.module.css";

interface CourseCardProps {
  title: string;
  description: string;
  tutor: string;
  date: string;
  image: string;
  href: string;
  isWebinar?: boolean;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  tutor,
  date,
  image,
  href,
  isWebinar = false,
}) => {
  const tagText = isWebinar ? "Webinar" : "Course";
  const tagColor = isWebinar ? "!border-green-500" : "!border-pink-500";
  const tagBg = isWebinar ? "bg-green-400" : "bg-pink-400";

  return (
    <a href={href} className="block">
      <div
        className={`py-4 px-10 my-16 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden scale-100 hover:scale-[102%] ease-in-out duration-200 ${styles.courseCardImage}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="p-4 md:w-11/12 text-justify">
          <div className="flex mb-2">
            <h2
              className={`text-white text-2xl mb-1 schib font-extrabold ${styles.textShadow}`}
            >
              {title}
            </h2>

            <div
              className={`inline-block transition duration-200 rounded shadow backdrop-blur-lg border ${tagColor} !border-opacity-50 hover:!border-opacity-90 ${tagBg} bg-opacity-20 hover:bg-opacity-90 px-3 py-2 mx-4 !my-auto `}
            >
              <span className="text-white schib font-bold">{tagText}</span>
            </div>
          </div>

          <p className={`text-stone-300 text-sm mb-2 ${styles.textShadow}`}>
            taught by {tutor} &middot; {date}
          </p>

          <p className={`text-stone-200 py-4 ${styles.textShadow}`}>
            {description}
          </p>

          <div className="inline-block transition duration-200 rounded shadow backdrop-blur-lg border !border-orange-500 !border-opacity-50 hover:!border-opacity-90 bg-orange-400 bg-opacity-20 hover:bg-opacity-90 px-3 py-2 !my-auto ">
            <span className="text-white font-semibold schib">Learn More</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
