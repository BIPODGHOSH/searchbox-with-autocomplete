import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/searchbox.module.css";
import { useState } from "react";

const Searchbox = () => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.container}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Type to search"
        className={styles.inputBox}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;
