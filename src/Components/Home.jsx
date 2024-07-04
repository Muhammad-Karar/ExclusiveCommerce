import React from 'react';
import FlashSales from './FlashSales';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import Category from './Category';
import BestSellingProductus from './BestSellingProductus';
import PromoBanner from './PromoBanner';

export default function Home() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <Carousel />
            </div>
            <FlashSales/>
            <Category/>
            <BestSellingProductus/>
            <PromoBanner/>
        </>
    );
}
