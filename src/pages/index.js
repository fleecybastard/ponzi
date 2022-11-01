import React, {useState, useEffect} from 'react';
import Navbar from '.././components/Navbar';
import SideBar from '.././components/Sidebar';
import Home from '../components/Home';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Contract from '../components/Contract';
import Footer from '../components/Footer';
// import Gameplay from '../components/Gameplay';
import Gameplay from '../components/Gameplay2';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = ()  => {
    const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
    return (
        <>
            <ScrollToTop/>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Home/>
            <About/>
            <Gameplay/>
            <Tokenomics/>
            <Contract/>
            <Footer/>
        </>
    )
}

export default HomePage;
