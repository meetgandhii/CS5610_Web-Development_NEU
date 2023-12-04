import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
        console.log(id);
        if (id) {
            console.log(id);
            findUserById(id);
        } else {
            console.log("Hi");
            fetchAccount();
        }
    }, [id]);

    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input
                        value={account.password}
                        onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, password: e.target.value }))}
                    />
                    <input
                        value={account.firstName}
                        onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, firstName: e.target.value }))}
                    />
                    <input
                        value={account.lastName}
                        onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, lastName: e.target.value }))}
                    />
                    <input
                        value={account.dob}
                        onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, dob: e.target.value }))}
                    />
                    <input
                        value={account.email}
                        onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, email: e.target.value }))}
                    />
                    <select onChange={(e) => setAccount((prevAccount) => ({ ...prevAccount, role: e.target.value }))}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={save}>
                        Save
                    </button>
                    <button onClick={signout}>
                        Signout
                    </button>

                    <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
                        Users
                    </Link>

                </div>
            )}
        </div>
    );
}
export default Account;