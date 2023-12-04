import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/signin/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <label>Username</label>
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
          <label>Password</label>
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
          <label>First Name</label>
          <input
        value={credentials.firstName}
        onChange={(e) => setCredentials({
          ...credentials,
          firstName: e.target.value })} />
          <label>Last Name</label>
          <input
        value={credentials.lastName}
        onChange={(e) => setCredentials({
          ...credentials,
          lastName: e.target.value })} />
          <label>DOB</label>
          <input
        value={credentials.dob}
        onChange={(e) => setCredentials({
          ...credentials,
          dob: e.target.value })} />
          <label>Email</label>
          <input
        value={credentials.email}
        onChange={(e) => setCredentials({
          ...credentials,
          email: e.target.value })} />
      <button onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;

