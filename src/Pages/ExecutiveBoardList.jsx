import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExecutiveBoardList.module.css";
import { headshotHash } from "../Assets/headshot";

export default function ExecutiveBoardList({ brothers }) {
  // Separate brothers into Cabinet and Executive Board based on brother[10]
  const cabinetMembers = brothers.filter(
    (brother) => brother[10] === "Cabinet",
  );
  const executiveBoardMembers = brothers.filter(
    (brother) => brother[10] === "Executive Board",
  );

  return (
    <div className={styles.container}>
      {/* Cabinet Section */}
      <div className={styles.section}>
        <h2>Cabinet</h2>
        <div className={styles.brotherGrid}>
          {cabinetMembers.map(
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
                    <p className={styles.brotherRole}>{brother[11]}</p>
                  </Link>
                </div>
              ),
          )}
        </div>
      </div>

      {/* Executive Board Section */}
      <div className={styles.section}>
        <h2>Executive Board</h2>
        <div className={styles.brotherGrid}>
          {executiveBoardMembers.map(
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
                    <p className={styles.brotherRole}>{brother[11]}</p>
                  </Link>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
