import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./nav.js";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    const fetchAccount = async () => {
        const fetchedAccount = await client.account();
        setAccount(fetchedAccount);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    useEffect(() => {
        if (id !== undefined && id !== "") {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, [id]);

    return (
        <div style={styles.container}>
            <Nav />
            <h1 style={styles.heading}>Account</h1>
            {account && (
                <div>
                    <label style={styles.label}>Password</label>
                    <input
                        style={styles.input}
                        value={account.password}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                password: e.target.value,
                            }))
                        }
                    />
                    <label style={styles.label}>First Name</label>
                    <input
                        style={styles.input}
                        value={account.firstName}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                firstName: e.target.value,
                            }))
                        }
                    />
                    <label style={styles.label}>Last Name</label>
                    <input
                        style={styles.input}
                        value={account.lastName}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                lastName: e.target.value,
                            }))
                        }
                    />
                    <label style={styles.label}>DOB</label>
                    <input
                        style={styles.input}
                        value={account.dob}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                dob: e.target.value,
                            }))
                        }
                    />
                    <label style={styles.label}>Email</label>
                    <input
                        style={styles.input}
                        value={account.email}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                email: e.target.value,
                            }))
                        }
                    />
                    <label style={styles.label}>Role</label>
                    <select
                        style={styles.select}
                        onChange={(e) =>
                            setAccount((prevAccount) => ({
                                ...prevAccount,
                                role: e.target.value,
                            }))
                        }
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button style={styles.button} onClick={save}>
                        Save
                    </button>
                    <button style={styles.button} onClick={signout}>
                        Signout
                    </button>

                    <Link to="/kanbas/admin/users" style={styles.link}>
                        Users
                    </Link>
                </div>
            )}
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
    select: {
        width: "100%",
        padding: "8px",
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginRight: "10px",
    },
    link: {
        backgroundColor: "#FF9800",
        color: "white",
        padding: "10px 15px",
        textDecoration: "none",
        display: "inline-block",
        borderRadius: "4px",
        cursor: "pointer",
        textAlign: "center",
    },
};

export default Account;
