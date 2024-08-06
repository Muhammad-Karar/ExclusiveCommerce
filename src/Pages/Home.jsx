import React from 'react';
import FlashSales from '../Components/FlashSales';
import Category from '../Components/Category';
import BestSellingProductus from '../Components/BestSellingProductus';
import PromoBanner from '../Components/PromoBanner';
import OurProduct from '../Components/OurProduct';
import NewArrival from '../Components/NewArrival';
import Feature from '../Components/Feature';
import SideBarPLayout from './SideBarPLayout';

export default function Home() {
    return (
        <>
            <SideBarPLayout />
            <FlashSales/>
            <Category/>
            <BestSellingProductus/>
            <PromoBanner/>
            <OurProduct/>
            <NewArrival/>
            <Feature/>
        </>
    );
}
