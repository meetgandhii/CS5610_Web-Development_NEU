import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
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
    <div style={styles.container}>
      <h1 style={styles.heading}>Signup</h1>
      {error && <div style={styles.error}>{error}</div>}
      <label style={styles.label}>Username</label>
      <input
        style={styles.input}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <label style={styles.label}>Password</label>
      <input
        style={styles.input}
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <label style={styles.label}>First Name</label>
      <input
        style={styles.input}
        value={credentials.firstName}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            firstName: e.target.value,
          })
        }
      />
      <label style={styles.label}>Last Name</label>
      <input
        style={styles.input}
        value={credentials.lastName}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            lastName: e.target.value,
          })
        }
      />
      <label style={styles.label}>DOB</label>
      <input
        style={styles.input}
        type="date"
        value={credentials.dob}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            dob: e.target.value,
          })
        }
      />
      <label style={styles.label}>Email</label>
      <input
        style={styles.input}
        type="email"
        value={credentials.email}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            email: e.target.value,
          })
        }
      />
      <button style={styles.button} onClick={signup}>
        Signup
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Signup;

