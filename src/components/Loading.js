import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = ({ text }) => {
  return <div className={styles.loading}>{text}</div>;
};

export default Loading;
