import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetials from './../pages/TourDetials';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from "../pages/ThankYou";


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<ThankYou/>} />
            <Route path="/tours/search" element={<SearchResultList />} />
            
        </Routes>
    );

};
export default Routers;