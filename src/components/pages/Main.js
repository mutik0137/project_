import React from 'react';
import '../styles/Main.css';
import {BrowserRouter, Route } from 'react-router-dom';

import About from './About';
import PostPage from './Post-Page'; 
import Home from './Home'; 
import SideBar from './SideBar'; 
 
function Main() {
  return (
    <BrowserRouter>
      <div className="body">
        <SideBar></SideBar>
        <Route exact path="/" component={Home}/>
        <Route path="/Post" component={PostPage}/>
        <Route path="/About" component={About}/>
      </div>
    </BrowserRouter>
  );
}

export default Main;