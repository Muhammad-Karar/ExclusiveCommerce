import React from 'react';
import Sidebar from './Sidebar';
import { Outlet , useLocation } from 'react-router-dom';
import Carousel from './Carousel';


export default function SideBarPLayout() {
    const location = useLocation();
    const showCarousel = location.pathname === '/';
    return (
        <div className="flex max-[500px]:flex-col">
            <Sidebar className="w-1/4" />
            <div className="w-3/4 max-[500px]:w-full max-[500px]:flex max-[500px]:justify-center">
                {showCarousel ? <Carousel /> : <Outlet />}
            </div>
        </div>
    )
}
