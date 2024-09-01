import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaTshirt,
  FaDoorOpen,
} from "react-icons/fa";
import styles from "./RushEventInfo.module.css";

const RushEventInfo = ({ event }) => (
  <div className={styles.eventCard}>
    <h2 className={styles.eventTitle}>{event.name}</h2>
    <div className={styles.eventDetails}>
      <EventDetail icon={<FaCalendarAlt />} text={event.date} />
      <EventDetail icon={<FaMapMarkerAlt />} text={event.location} />
      <EventDetail icon={<FaClock />} text={event.time} />
      <EventDetail icon={<FaTshirt />} text={event.attire} />
      <EventDetail icon={<FaDoorOpen />} text={event["open-ness"]} />
    </div>
  </div>
);

const EventDetail = ({ icon, text }) => (
  <div className={styles.eventDetail}>
    {icon}
    <span>{text}</span>
  </div>
);

export default RushEventInfo;
