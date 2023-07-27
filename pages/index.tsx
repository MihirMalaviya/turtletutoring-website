import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Accordion from "../components/Accordian";
import InfoCard from "../components/InfoCard";
import styles from "../styles/landing.module.css";
import Button from "../components/Button";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TurtleTutoring</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerImage} />
        <div className={styles.headerGradientsTop} />
        <div className={styles.headerGradientsBottom} />
        <section className={styles.sectionContainer}>
          <div>
            <h1 className={styles.title}>
              Made by Students
              <br />
              for Students
            </h1>
            <p className={styles.description}>
              Turtle Tutoring is a non-profit organization that provides free
              tutoring to allow everyone to have the resources that they need to
              succeed. Our panel of tutors specialize in tutoring middle school
              to high school subjects ranging from honors and AP level classes
              in the fields of{" "}
              <u>
                Mathematics, English, Computer Science, Science, History, and
                World Languages
              </u>
              . Take the initiative to join TurtleTutoring to bridge the gap or
              accelerate your educational journey!
            </p>

            {/* <div className="flex justify-center md:justify-start">
              <Link href="/courses" passHref>
                <button className={`${styles.headerButton} flex schib my-4`}>
                  Learn More
                  <ChevronRightIcon className="w-5 h-5 ml-2 -mr-2 mt-[2px]" />
                </button>
              </Link>
            </div> */}

            <Button
              href="/learn/courses"
              variant="custom"
              className="mt-5 ml-auto mr-auto md:ml-0 md:mr-0"
              buttonClassName="py-3 px-4 md:!py-4 md:!px-10 !text-xl shadow-sm !bg-orange-500 !border-orange-700 !text-yellow-100 hover:!bg-red-500 hover:!text-white hover:!border-red-600 hover:underline"
              size="lg"
            >
              Learn More
              <ChevronRightSharpIcon className="ml-1 -mr-2 -mt-1" />
            </Button>
          </div>
        </section>
      </div>
      <Container className={styles.main}>
        <section className={styles.infoCardContainer}>
          <InfoCard
            title="Free, Forever"
            text="Turtle Tutoring is a non-profit organization that provides free tutoring to allow everyone to have the resources that they need to succeed. Our panel of tutors specialize in tutoring middle school to high school subjects ranging from honors and AP level classes in the fields of Mathematics, English, Science, History, and World Languages. Take the initiative to join TurtleTutoring to bridge the gap or accelerate your educational journey!"
            href="/courses"
          />
          <InfoCard title="Online Courses" text="placeholder" href="/courses" />
          <InfoCard title="Blogs" text="placeholder" href="/blogs/latest" />
          <InfoCard
            title="Volunteer Opportunity"
            text="By volunteering for TurtleTutoring, you will gain leadership experience, and earn volunteer hours."
            href="/join"
          />
        </section>
      </Container>

      <section className={"mx-auto w-3/5 my-20 h-100"}>
        <div className="d-flex flex-row items-center justify-between flex-wrap">
          <div className={styles.sectionInformation}>
            <h2 className={`${styles.sectionTitle} text-center md:text-left`}>
              Join Our Community
            </h2>
            <p
              className={`${styles.sectionDescription} text-center md:text-left`}
            >
              Join our Discord server! Use our channels to ask our tutors for
              help, or just hang out!
            </p>
          </div>
          <a href="https://discord.gg/srbw7UZ44G" className="mx-auto">
            <img
              src="/discord-mark-green.png"
              className={styles.sectionImage}
            />
          </a>
        </div>
      </section>
      <section className={"mx-auto w-3/5 my-25 h-100"}>
        <div className="d-flex flex-row-reverse items-center justify-between flex-wrap mt-5">
          <div className={styles.sectionInformation}>
            <h2 className={`${styles.sectionTitle} text-center md:text-right`}>
              Check Out Our Blogs
            </h2>
            <p
              className={`${styles.sectionDescription} text-center md:text-right`}
            >
              placeholder
            </p>
          </div>
          <a href="https://discord.gg/srbw7UZ44G" className="mx-auto">
            <img src="/logotransparent.png" className={styles.sectionImage} />
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mx-auto mt-5 mb-32 w-1/2">
        <div className="text-center mt-5">
          <h2 className={styles.sectionTitle}>Become a Volunteer</h2>
          <p className={`${styles.sectionDescription} w-2/3 mx-auto`}>
            Become a volunteer, and tutor people online, have your own online
            course, or host webinars! We welcome anyone that wants to help out!
          </p>
        </div>
        {/* <a
          href="#_"
          className="schib mx-auto mt-8 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-stone-600 whitespace-no-wrap bg-stone-50 border border-stone-200 rounded-md shadow-2xl shadow-stone-500 hover:text-green-500 hover:!bg-green-50 hover:!border-green-200 hover:!shadow-green-200 hover:shadow-xl duration-200 ease-in-out"
        >
          Sign Up
        </a> */}
        <Button
          href="#_"
          variant="secondary"
          size="lg"
          buttonClassName="m-5 shadow-sm"
        >
          Sign Up
        </Button>
      </section>

      <h2 className="text-center capra">Frequently Asked Questions</h2>
      <Accordion
        data={[
          [
            "Are all courses free?",
            "Yes! TurtleTutoring's courses are all 100% free and everyone is eligible to sign up!",
          ],
          [
            "Do volunteers earn volunteer hours?",
            "Yes! Volunteers will receive volunteer hours for the time that they take to teach and prepare for a course. Certificates will be handed out each month, indicating the number of hours they earned.",
          ],
        ]}
      />
    </div>
  );
};

export default HomePage;
