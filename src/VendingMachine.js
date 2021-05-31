import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Chips from './Chips';
import Snickers from './Snickers';
import FruitSnacks from './FruitSnacks';

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Route exact path='/'><Home /></Route>
                <Route exact path='/chips'><Chips /></Route>
                <Route exact path='/snickers'><Snickers /></Route>
                <Route exact path='/fruitsnacks'><FruitSnacks /></Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;