import React from 'react';
import { NavLink } from 'react-router-dom';

const Chips = () => {
    const styles = {
        width: '500px',
        height: 'auto',
        marginBottom: '20px'
    }
    return (
        <div>
            <h1>Chips</h1>
            <div><img src='https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' alt='chips' style={styles}></img></div>
            <NavLink exact to='/' style={{ textDecoration: 'none' }}>Back to Vending Machine</NavLink>
        </div>
    )
}

export default Chips;