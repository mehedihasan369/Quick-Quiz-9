import React from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from '../Components/Navbar/MyNavbar';

const Header = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;