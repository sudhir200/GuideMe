import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from './components/pages/signin/Login'
import Navbars from './components/Navbars';
import Signup from './components/pages/signin/Signup'
import Aboutus from './components/pages/Aboutus'
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services'






function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route path='/' exact component = {Home}/>
        <Route path='/services' component = {Services} />
        <Route path='/aboutus' component = {Aboutus} />
        <Route path='/sign-up'  component = {Login}/>
        <Route path='/sign-in'  component = {Signup}/>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
