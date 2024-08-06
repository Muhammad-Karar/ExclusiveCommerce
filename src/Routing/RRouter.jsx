
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import Home from '../Components/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const RRouter = () => {
    return (
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='signup' element={<SignUp />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='about' element={<About />}/>
            </Routes>
    );
};

export default RRouter;
