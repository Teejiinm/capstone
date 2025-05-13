import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

<<<<<<< HEAD
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetials from '../pages/TourDetials';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
=======
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
>>>>>>> 163829768f4e7f1823e38e46d31295083baef47e
import ThankYou from "../pages/ThankYou";
import Blog from "../components/Blog/Blog";
import BlogDetails from './../pages/BlogDetails';


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/thank-you" element={<ThankYou/>} />
            <Route path="/tours/search" element={<SearchResultList />} />
            
        </Routes>
    );

};
export default Routers;