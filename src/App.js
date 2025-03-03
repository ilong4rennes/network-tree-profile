import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const isFormValid = firstName && lastName && email && phone && agreeToTerms;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log('Form Data:', {
      firstName,
      lastName,
      email,
      phone,
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAgreeToTerms(false);
  };

  return (
    <>
      <div className="header">
        <button className="back-button">← Back</button>
        <div className="progress-step">1/3 Create profile</div>
      </div>
      <div className="container">
        <img class="tree-logo" src="https://cdn.prod.website-files.com/65577369ff882f1307fc2012/67004ddf712b590d6b64dd55_tree-dark-p-500.png" alt="Tree Logo" />
        <h1>Create Network Tree Profile</h1>
        <p class="form-subtitle">Please provide some basic information</p>

        {/* The Form */}
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Email Address */}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Phone Number */}
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Checkbox for Terms and Privacy Policy */}
          <div className="checkbox-container">
            <input
              id="termsCheckbox"
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <label htmlFor="termsCheckbox">
              I agree to the{' '}
              <a href="#privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </label>
          </div>

          {/* Create Account Button */}
          <button type="submit" disabled={!isFormValid}>
            Create Account
          </button>
        </form>

        {/* Google reCAPTCHA Placeholder */}
        <div className="recaptcha-placeholder">
          <p>This site is protected by reCAPTCHA and the Google {' '} 
            <a href="#privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy 
            </a> 
            {' '} and {' '}
            <a href="#terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
            </a>{' '} 
            apply.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
