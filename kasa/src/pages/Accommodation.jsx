import styles from "./Accommodation.module.scss";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Owner from "../components/Owner";
import Rating from "../components/Rating";

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (found) {
          setLogement(found);
        } else {
          navigate("/404");
        }
      })
      .catch((err) => {
        console.error("Error loading logement:", err);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!logement) return null;

  return (
    <div className={styles.container}>
      <div className={styles.slideshowContainer}>
        <Slideshow pictures={logement.pictures} />
      </div>
      <div className={styles.details}>
        <div className={styles.summaryAndOwnerAndRating}>
          <div className={styles.summary}>
            <h1 className={styles.title}>{logement.title}</h1>
            <p className={styles.location}>{logement.location}</p>
            <div className={styles.tags}>
              {logement.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </div>
          </div>
          <div className={styles.ownerAndRating}>
            <div className={styles.ownerContainer}>
              <Owner
                name={logement.host.name}
                picture={logement.host.picture}
              />
            </div>
            <div className={styles.ratingContainer}>
              <Rating value={logement.rating} />
            </div>
          </div>
        </div>
        <div className={styles.collapses}>
          <Collapse
            key="description"
            title="Description"
            content={logement.description}
          />
          <Collapse
            key="equipments"
            title="Équipements"
            content={logement.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
