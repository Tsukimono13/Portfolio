import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./my-works/Works";
import Distant from "./distant-work/Distant";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Distant/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
