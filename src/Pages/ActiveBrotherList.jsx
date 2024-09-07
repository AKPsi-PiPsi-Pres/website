import React from "react";
import { Link } from "react-router-dom";
import styles from "./ActiveBrotherList.module.css";
import { headshotHash } from "../Assets/headshot";

export default function ActiveBrotherList({ brothers }) {
  return (
    <div className={styles.container}>
      <div className={styles.brotherGrid}>
        {brothers &&
          brothers.map(
            (brother) =>
              brother.length > 0 && (
                <div key={brother[0]} className={styles.brotherCard}>
                  <Link
                    to={`/${brother[0].replace(" ", "-")}`}
                    className={styles.brotherLink}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={
                          headshotHash[brother[0]]
                            ? headshotHash[brother[0]]
                            : headshotHash["Default Headshot"]
                        }
                        alt={brother[0]}
                        className={styles.brotherPhoto}
                      />
                    </div>
                    <p className={styles.brotherName}>{brother[0]}</p>
                  </Link>
                </div>
              )
          )}
      </div>
    </div>
  );
}
