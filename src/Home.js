import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const styles = {
        width: '500px',
        height: 'auto',
        margin: '20px'
    }
    return (
        <div>
            <h1>Welcome to the Vending Machine!</h1>
            <h3>What would you like to eat?</h3>
            <nav className='Home-nav'>
                <NavLink exact to='/chips'>Chips</NavLink>
                <NavLink exact to='/snickers'>Snickers</NavLink>
                <NavLink exact to='/fruitsnacks'>Fruit Snacks</NavLink>
            </nav>
            <img src='https://images.unsplash.com/photo-1585341840941-98553e474d84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80' alt='vending machine' style={styles}></img>
        </div>
    )
}

export default Home;