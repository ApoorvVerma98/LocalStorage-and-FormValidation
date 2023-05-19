import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [storedData, setStoredData] = useState([]);

  const clearLocalStorage = () => {
    const confirmation = window.confirm(
      "Are you sure you want to clear the stored data?"
    );
    if (confirmation) {
      localStorage.removeItem("formData");
      setStoredData([]);
    }
  };

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setStoredData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(storedData));
  }, [storedData]);

  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <Button onClick={clearLocalStorage} className={styles.clearButton}>
        Clear
      </Button>
      <div>
        <h2>Stored Data:</h2>
        {storedData.map((data, index) => (
          <div key={index}>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
