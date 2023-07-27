import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import styles from "../styles/landing.module.css";

interface InfoCardProps {
  title: string;
  text: string;
  href: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text, href }) => (
  <Link href={href} passHref={true}>
    <div>
      <Card style={{ width: "18rem" }} className={`${styles.infoCard} mt-4 mb-5`}>
        <Card.Body>
          <Card.Title className={styles.infoCardTitle}>{title}</Card.Title>
          <Card.Text className={styles.infoCardText}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Link>
);

export default InfoCard;
