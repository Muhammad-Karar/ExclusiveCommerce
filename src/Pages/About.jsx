import React, { useState } from 'react';
import AboutPageP1 from '../assets/AboutPageP1.png';
import BreadCrumb from '../Components/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSackDollar, faDollarSign, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const history = [
  { id: 1, icon: faStore, Rate: '10.5k', disc: 'Sallers active our site' },
  { id: 2, icon: faDollarSign, Rate: '33k', disc: 'Monthly Product sale' },
  { id: 3, icon: faBagShopping, Rate: '45.5k', disc: 'Customer active in out site' },
  { id: 4, icon: faSackDollar, Rate: '25k', disc: 'Anual gross sale in our site' },
];

export default function About() {

  return (
    <div className="mt-20">
      <BreadCrumb />
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <div className="order-1 md:order-1 w-full max-w-xl py-16 px-14 mx-auto sm:px-10 sm:py-12 sm:mx-16 md:px-8 md:py-24">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="text-lg">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging from
            consumer goods.
          </p>
        </div>
        {/* Image Section */}
        <div className="order-2 md:order-2 w-full md:w-1/2 bg-white md:ml-14">
          <img
            src={AboutPageP1}
            alt="Two women shopping"
            className="w-full h-5/6 object-cover rounded-l-sm"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-x-12">
        {history.map((index) => (
          <div key={index.id}
            className="h-48 w-60 space-y-2 border rounded-md flex flex-col items-center justify-center cursor-pointer p-4">
            <div className="bg-gray-200 p-2 rounded-full">
              <div className="bg-black p-4 rounded-full">
                <FontAwesomeIcon icon={index.icon} className="text-xl text-white" />
              </div>
            </div>

            <h2 className="text-xl font-bold">{index.Rate}</h2>
            <p className="text-md text-gray-600">{index.disc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
