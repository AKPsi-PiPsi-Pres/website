import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExecutiveBoardList.module.css";
import { PersonalGrowth } from "../Assets";

export default function ExecutiveBoardList({ brothers }) {
  return (
    <div className={styles.container}>
      <div className={styles.brotherGrid}>
        {brothers &&
          brothers.map(
            (brother) =>
              brother.length > 0 && (
                <div key={brother[0]} className={styles.brotherCard}>
                  <Link to={`/`}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={PersonalGrowth}
                        alt={brother[0]}
                        className={styles.brotherPhoto}
                      />
                    </div>
                    <p className={styles.brotherName}>{brother[0]}</p>
                  </Link>
                </div>
              ),
          )}
      </div>
    </div>
  );
}