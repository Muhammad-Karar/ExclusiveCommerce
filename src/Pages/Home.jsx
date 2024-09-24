import React from 'react';
import FlashSales from '../Components/FlashSales';
import Category from '../Components/Category';
import BestSellingProductus from '../Components/BestSellingProductus';
import PromoBanner from '../Components/PromoBanner';
import OurProduct from '../Components/OurProduct';
import NewArrival from '../Components/NewArrival';
import Feature from '../Components/Feature';
import SideBarPLayout from '../Components/SideBarPLayout';



export default function Home() {
    return (
        <div className='mx-2 md:mx-0'>
            <SideBarPLayout />
            <FlashSales />
            <Category />
            <BestSellingProductus />
            <PromoBanner />
            <OurProduct />
            <NewArrival />
            <Feature />
        </div>
    );
}
