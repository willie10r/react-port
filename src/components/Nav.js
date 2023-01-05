import React from 'react';
import { ReactDOM } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>home</li>
                <li>contact</li>
                <li>gallery</li>
                <li>tracks</li>
            </ul>
        </div>
    );



};
export default Nav;
