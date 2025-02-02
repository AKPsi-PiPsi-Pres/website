import React from "react";
import { Link } from "react-router-dom";
import styles from "./ActiveBrotherList.module.css";
import { headshotHash } from "../Assets/headshot";
import { companyHash } from "../Assets/company";

export default function ActiveBrotherList({ brothers, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div className={styles.brotherGrid}>
          {brothers &&
            brothers.map(
              (brother) =>
                brother.length > 0 && (
                  <div key={brother[0]} className={styles.brotherCard}>
                    <Link
                      to={`/${encodeURIComponent(brother[0].replace(/ /g, "-"))}`}
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
                          loading="lazy"
                        />
                        <div className={styles.overlay}>
                          <img
                            src={
                              companyHash[brother[0]]
                                ? companyHash[brother[0]]
                                : companyHash["Default Headshot"]
                            }
                            alt={`${brother[0]} company logo`}
                            className={styles.overlayImage}
                          />
                        </div>
                      </div>
                      <p className={styles.brotherName}>{brother[0]}</p>
                    </Link>
                  </div>
                )
            )}
        </div>
      )}
    </div>
  );
}
