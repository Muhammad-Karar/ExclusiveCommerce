import React from 'react';
import FlashSales from './FlashSales';
import Sidebar from './Sidebar';
import Carousel from './Carousel';

export default function Home() {

    return (
        <>
            <div className="flex">
                <Sidebar />
                <Carousel />
            </div>
            <FlashSales />
        </>
    );
}