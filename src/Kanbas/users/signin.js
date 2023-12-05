import * as client from "./client";
import { useState } from "react";
import Nav from "./nav.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    const response = await client.signin(credentials);
    navigate(`./account`);
  };
  return (
    <div style={styles.container}>
      <Nav />
      <h1 style={styles.heading}>Signin</h1>
      <label style={styles.label}>Username</label>
      <input
        style={styles.input}
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <label style={styles.label}>Password</label>
      <input
        style={styles.input}
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button style={styles.button} onClick={signin}>
        Signin
      </button>
      <Link style={styles.button} to="/kanbas/signup">Sign Up</Link>
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
  button: {
    margin: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
export default Signin;

