import React from 'react';
import FlashSales from './FlashSales';
import Sidebar from './Sidebar';
import Carousel from './Carousel';

export default function Home() {

    return (
        <>
            <div className="flex sm:w-full sm:pl-4 sm:pt-4 sm:border-none">
                <Sidebar />
                <Carousel />
            </div>
            <FlashSales />
        </>
    );
}