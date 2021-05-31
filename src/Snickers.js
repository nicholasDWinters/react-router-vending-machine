import React from 'react';
import { NavLink } from 'react-router-dom';

const Snickers = () => {
    const styles = {
        width: '500px',
        height: 'auto',
        marginBottom: '20px'
    }
    return (
        <div>
            <h1>Snickers</h1>
            <div>
                <img src='https://images.unsplash.com/photo-1611250503393-9424f314d265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80' alt='snickers' style={styles}></img>
            </div>
            <NavLink exact to='/' style={{ textDecoration: 'none' }}>Back to Vending Machine</NavLink>
        </div>
    )
}

export default Snickers;
