import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill }
    from "react-icons/bs";
import { Link } from "react-router-dom";
import * as client from "./client";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>

                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>ID</th>
                        <th>Role</th>
                        <th>DOB</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>

                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <input value={user._id} onChange={(e) => setUser({ ...user, _id: e.target.value })} />
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td>
                            <input value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })} />
                        </td>
                        <td>
                            <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </td>
                        <BsFillCheckCircleFill onClick={updateUser}
                            className="me-2 text-success fs-1 text" />

                        <td>
                            <BsPlusCircleFill onClick={createUser} />
                        </td>
                    </tr>

                    {users.map((user) => (
                        <tr key={user._id}>
                            <td><Link to={`/kanbas/signin/account/${user._id}`}>
                                {user.username}
                            </Link>
                            </td>

                            <td>{user.password}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user._id}</td>
                            <td>{user.role}</td>
                            <td>{user.dob}</td>
                            <td>{user.email}</td>
                            <button onClick={() => deleteUser(user)}>
                                <BsTrash3Fill />
                            </button>

                            <button className="btn btn-warning me-2">
                                <BsPencil onClick={() => selectUser(user)} />
                            </button>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;

