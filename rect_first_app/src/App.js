import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/style.css'
import BaseLayout from './components/layout/BaseLayout'
import User from './components/layout/User'
import Clock from './components/layout/Clock'
import LogIn from './components/layout/LogIn'
import Refs from './components/layout/Refs'
import EventHandler from './components/layout/EventHandler'
import Product from "./components/layout/Product";
import UncontrolledComponent from "./components/layout/UncontrolledComponent";
function App() {
           return (
            <div className="container">
                {/*<BaseLayout/>*/}
                {/*<User color="yellow" name="John" lastname="Doe"/>*/}
                {/*<Clock/>*/}
                <LogIn/>
                <Refs/>
                <EventHandler/>
                <Product/>
                <UncontrolledComponent/>
            </div>
        );
}
export default App;
