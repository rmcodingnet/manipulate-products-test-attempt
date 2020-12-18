import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Product List</Link></li>
                <li><Link to="/add">Add Product</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;