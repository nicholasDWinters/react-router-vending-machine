import React from 'react';
import { NavLink } from 'react-router-dom';

const FruitSnacks = () => {
    const styles = {
        width: '500px',
        height: 'auto',
        margin: '20px'
    }
    return (
        <div>
            <h1>Fruit Snacks</h1>
            <NavLink exact to='/' style={{ textDecoration: 'none' }}>Back to Vending Machine</NavLink>
            <img src='https://images.unsplash.com/photo-1617627191898-1408bf607b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1034&q=80' alt='fruit snacks' style={styles}></img>
        </div>
    )
}

export default FruitSnacks;