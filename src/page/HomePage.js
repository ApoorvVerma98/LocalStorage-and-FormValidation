import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
const [storedData, setStoredData] = useState({});

const clearLocalStorage = () => {
const confirmation = window.confirm('Are you sure you want to clear the stored data?');
if (confirmation) {
localStorage.removeItem('formData');
setStoredData({});
}
};

const storedFormData = localStorage.getItem('formData');
if (storedFormData && Object.keys(storedData).length === 0) {
setStoredData(JSON.parse(storedFormData));
}

return (
<div className={styles.homePage}>
<h1>Welcome to the Home Page</h1>
<p>This is the content of the home page.</p>
<Button onClick={clearLocalStorage} className={styles.clearButton}>Clear</Button>
<div>
<h2>Stored Data:</h2>
<p>First Name: {storedData.firstName}</p>
<p>Last Name: {storedData.lastName}</p>
</div>
</div>
);
};

export default HomePage;