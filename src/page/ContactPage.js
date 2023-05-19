import React, { useState } from 'react';
import Button from '../button/Button';
import styles from './ContactPage.module.css';

const ContactPage = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
phoneNumber: '',
});

const handleInputChange = (event) => {
const { name, value } = event.target;
setFormData((prevState) => ({
...prevState,
[name]: value,
}));
};

const handleSubmit = (event) => {
event.preventDefault();
if (formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
localStorage.setItem('formData', JSON.stringify(formData));
setFormData({
firstName: '',
lastName: '',
email: '',
phoneNumber: '',
});
alert('Form submitted successfully!');
} else {
alert('Please fill in all the required fields.');
}
};
 
return (
<div className={styles.contactPage}>
<h1>Contact Us</h1>
<form onSubmit={handleSubmit}>
<label>
First Name:
<input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
</label>
<br />
<label>
Last Name:
<input placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
</label>
<br />
<label>
Email ID:
<input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
</label>
<br />
<label>
Phone Number:
<input placeholder="Phone Number" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
</label>
<br />
<Button type="submit">Submit</Button>
</form>
</div>
);
};

export default ContactPage;