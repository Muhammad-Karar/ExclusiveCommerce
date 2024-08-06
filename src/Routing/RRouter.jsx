
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import Home from '../Components/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import WomansFashion from '../Pages/WomansFashion';
import MensFashion from '../Pages/MensFashion';
import Electronics from '../Pages/Electronics';
import HomeAstyle from '../Pages/HomeAstyle';
import Medicine from '../Pages/Medicine';
import SportAoutDoor from '../Pages/SportAoutDoor';
import BabysAtoys from '../Pages/BabysAtoys';
import GroceriesApets from '../Pages/GroceriesApets';
import HealthAbeauity from '../Pages/HealthAbeauity';


const RRouter = () => {
    return (
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='signup' element={<SignUp />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='about' element={<About />}/>
                <Route path='womwnsF' element={<WomansFashion />}/>
                <Route path='mensF' element={<MensFashion />}/>
                <Route path='electronic' element={<Electronics />}/>
                <Route path='homeAStyle' element={<HomeAstyle />}/>
                <Route path='medicine' element={<Medicine />}/>
                <Route path='sportAoutDoor' element={<SportAoutDoor />}/>
                <Route path='babyAtoys' element={<BabysAtoys />}/>
                <Route path='groceriesApets' element={<GroceriesApets />}/>
                <Route path='healthAbeauity' element={<HealthAbeauity />}/>

            </Routes>
    );
};

export default RRouter;
