import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/style.css'
import BaseLayout from './components/layout/BaseLayout'
import User from './components/layout/User'
function App() {
           return (
            <div className="container">
                <BaseLayout/>
                <User color="yellow" name="John" lastname="Doe"/>
            </div>
        );
}
export default App;
