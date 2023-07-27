import React from "react";
import { AppProps } from "next/app";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/main.css";
import "../styles/globals.css";
import MainNavbar from "../components/MainNavbar";

interface FooterLinkProps {
  href: string;
  text: string;
}

function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <Link href={href} passHref>
      <p role="button" className="w-fit text-white hover:!text-purple-300 hover:underline transition duration-75">
        {text}
      </p>
    </Link>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const renderFooterLinks = () => {
    const links = [
      { href: "/courses", text: "Courses" },
      { href: "/about/team", text: "Our Team" },
      { href: "/blogs/latest", text: "Latest Blogs" },
      { href: "/join/volunteer", text: "Volunteer" },
    ];

    return links.map((link, index) => (
      <div key={index} className="my-3">
        <FooterLink href={link.href} text={link.text} />
      </div>
    ));
  };

  const renderSocialIcons = () => {
    const socialMediaLinks = [
      //   {
      //     href: "https://www.facebook.com/",
      //     alt: "facebook",
      //     src: "/socials/facebook.png",
      //   },
      {
        href: "https://www.instagram.com/turtletutoringnj",
        alt: "instagram",
        src: "/socials/instagram.png",
      },
      {
        href: "https://www.linkedin.com/company/turtletutoring",
        alt: "linkedin",
        src: "/socials/linkedin.png",
      },
      {
        href: "https://twitter.com/turtletutnj",
        alt: "twitter",
        src: "/socials/twitter.png",
      },
    ];

    return socialMediaLinks.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noreferrer noopener"
        className="me-3 text-white invert hover:scale-90 ease-in-out duration-150"
      >
        <Image src={link.src} alt={link.alt} width={35} height={35} />
      </a>
    ));
  };

  return (
    <>
      {asPath === "/" && (
        <div className="banner text-white bg-gradient-to-r from-orange-500 to-yellow-500 bg-orange-500">
          <div>
            {"🐢 "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-underline cursor-pointer text-white"
            >
              <b>Sign up</b>
            </a>
            {" for a course! 🐢"}
          </div>
        </div>
      )}
      <MainNavbar />
      <Component {...pageProps} />
      <footer className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-orange-500">
        <Container className="w-100">
          <div>
            <Row>
              <Col>
                <div>
                  <b className="schib">Information</b>
                  <hr className="my-3 h-[2px] bg-white" />
                  <div>{renderFooterLinks()}</div>
                </div>
              </Col>
              <Col md={{ offset: 1 }}>
                <div>
                  <b className="schib">Contact</b>
                  <hr className="my-3 h-[2px] bg-white" />
                  <div>
                    <Link href="mailto:turtletutoringnj@gmail.com" passHref>
                      <p role="button" className="w-fit text-white hover:!text-purple-300 hover:underline transition duration-75">
                        Email Us
                      </p>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <hr className="h-[2px] bg-white" />
          <div className="d-flex flex-row justify-content-between my-3">
            <span className="schib font-medium">
              &copy; {new Date().getFullYear()} TurtleTutoring
            </span>
            <span className="flex">{renderSocialIcons()}</span>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default MyApp;
