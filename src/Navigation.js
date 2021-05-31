import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (

        <nav className='Navigation'>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/snickers'>Snickers</NavLink>
            <NavLink exact to='/fruitsnacks'>Fruit Snacks</NavLink>
        </nav>

    )
}

export default Navigation;