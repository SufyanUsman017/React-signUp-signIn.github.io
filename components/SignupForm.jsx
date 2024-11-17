
import React, { useState } from 'react';
import '../App.css'; 

export default function SignupForm() {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [message, setMessage] = useState('');

  function signup(e) {
    e.preventDefault();
    const userFound = users.find((user) => user.email === signupEmail);
    if (!userFound) {
      setUsers([...users, { firstname, lastname, email: signupEmail, password: signupPassword }]);
      alert('User registered successfully');
    } else {
      alert('User already exists');
    }
    setFirstName('');
    setLastName('');
    setSignupEmail('');
    setSignupPassword('');
  }

  function signin(e) {
    e.preventDefault();
    const userFound = users.find(
      (user) => user.email === signInEmail && user.password === signInPassword
    );
    if (userFound) {
      setMessage(`Welcome ${userFound.firstname} ${userFound.lastname}`);
    } else {
      setMessage('Invalid email or password');
    }
    setSignInEmail('');
    setSignInPassword('');
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={signup}>
          <label>First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container">
        <h2>Sign In</h2>
        <form onSubmit={signin}>
          <label>Email:</label>
          <input
            type="email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
