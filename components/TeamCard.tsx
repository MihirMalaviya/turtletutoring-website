import React, { useState } from "react";
import { Card } from "react-bootstrap";
import classNames from "classnames";
import Image from "next/image";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

import styles from "../styles/team.module.css";

interface CardProps {
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
  alternateStyles?: string;
  important?: number;
}

const TeamCard: React.FC<CardProps> = ({
  imagePath,
  name,
  position,
  email,
  github,
  facebook,
  linkedin,
  twitter,
  instagram,
  discord,
  important = 0,
}) => {
  const placeholderImage = "/people/placeholder.png";
  const [imageError, setImageError] = useState(false);

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = placeholderImage;
    setImageError(true);
  };

  const cardClasses = classNames(
    "rounded-lg shadow-2xl mx-6 my-4 hover:scale-105 ease-in-out duration-200",
    {
      "!w-52 !h-[22rem] !bg-white hover:!bg-green-100 hover:!shadow-green-200":
        important === 0,
      "!w-60 !h-96 !bg-green-50 hover:!bg-green-200 hover:!shadow-green-400":
        important === 1,
      "!w-[20rem] !h-[30rem] !bg-green-100 hover:!bg-green-300":
        important === 2,
      [styles.teamCardBg]: important === 2,
    }
  );

  const imageClasses = classNames({
    "!shadow-inner": imageError,
  });

  const socialMediaIconClass =
    "w-8 h-8 text-stone-500 hover:scale-110 ease-in-out duration-200";

  return (
    <Card className={cardClasses}>
      <Image
        src={imageError ? placeholderImage : imagePath}
        alt={name}
        onError={handleImageError}
        className={imageClasses}
      />
      <Card.Body className="text-center">
        <Card.Title className="text-xl !font-extrabold schib mb-2 text-green-800">
          {name}
        </Card.Title>
        <Card.Text className="text-stone-600 mb-3">{position}</Card.Text>
        <div className="flex justify-center">
          {email && (
            <a href={`mailto:${email}`} className="mx-2">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip">{email}</Tooltip>}
              >
                <Image
                  src="/socials/email.png"
                  alt="Email"
                  width="40"
                  height="40"
                  className={socialMediaIconClass}
                />
              </OverlayTrigger>
            </a>
          )}
          {github && (
            <a href={github} className="mx-2">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip">{github}</Tooltip>}
              >
                <Image
                  src="/socials/github.png"
                  alt="GitHub"
                  width="40"
                  height="40"
                  className={socialMediaIconClass}
                />
              </OverlayTrigger>
            </a>
          )}
          {facebook && (
            <a href={facebook} className="mx-2">
              <Image
                src="/socials/facebook.png"
                alt="Facebook"
                width="40"
                height="40"
                className={socialMediaIconClass}
              />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} className="mx-2">
              <Image
                src="/socials/linkedin.png"
                alt="LinkedIn"
                width="40"
                height="40"
                className={socialMediaIconClass}
              />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="mx-2">
              <Image
                src="/socials/twitter.png"
                alt="Twitter"
                width="40"
                height="40"
                className={socialMediaIconClass}
              />
            </a>
          )}
          {instagram && (
            <a href={instagram} className="mx-2">
              <Image
                src="/socials/instagram.png"
                alt="Instagram"
                width="40"
                height="40"
                className={socialMediaIconClass}
              />
            </a>
          )}
          {discord && (
            <div className="mx-2">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip">{discord}</Tooltip>}
              >
                <Image
                  src="/socials/discord.png"
                  alt="Discord"
                  width="40"
                  height="40"
                  className={socialMediaIconClass}
                />
              </OverlayTrigger>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
