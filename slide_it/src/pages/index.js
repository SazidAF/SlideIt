import React, {useState} from 'react';
import Sidebar from '../components/LandingPage/Sidebar/SideIndex';
import Navbar from '../components/LandingPage/Navbar/NavIndex';
import MainSection from '../components/LandingPage/MainSection/MainIndex';
import InfoSection from '../components/LandingPage/InfoSection/InfoIndex';
import { homeObjOne } from '../components/LandingPage/InfoSection/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <MainSection/>
            <InfoSection {...homeObjOne}/>
        </>
    );
};

export default Home