import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '2px solid #ccc' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
        <li style={{ marginRight: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
          <Link to="/">Search</Link>
        </li>
        <li style={{ marginRight: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
          <Link to="/kanbas/signin">Signin</Link>
        </li>
        <li style={{ marginRight: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
          <Link to="/kanbas/signup">Signup</Link>
        </li>
        <li style={{ marginRight: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '4px' }}>
          <Link to="/kanbas/signin/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
