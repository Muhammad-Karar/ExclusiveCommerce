import React, { useState } from 'react';
import AboutPageP1 from '../assets/AboutPageP1.png';
import BreadCrumb from '../Components/BreadCrumb';
import TeamCard from '../Components/TeamCard';
import EmmaWatson from '../assets/EmmaWatson.png';
import k1 from '../assets/k1.png';
import TomCruse from '../assets/TomCruse.png';
import Feature from '../Components/Feature';
import StatSection from '../Components/StatSection';

const teamMembers = [
  {
      id: 1,
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: TomCruse,
  },
  {
      id: 2,
      name: "Muhammad Karar",
      title: "Product Designer/Developer",
      image: k1,
  },
  {
      id: 3,
      name: "Emma Watson",
      title: "Managing Director",
      image: EmmaWatson,
  },
];

export default function About() {

  return (
    <div className="mt-20">
      <BreadCrumb />
      {/* Text and Image section */}
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
      {/* History icons section */}
      <div>
        <StatSection />
      </div>
      {/* Team section */}
      <div className="container flex justify-center item-center my-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {teamMembers.map((member, index) => (
            <TeamCard key={index.id} member={member} />
          ))}
        </div>
      </div>
      {/* Feature section */}
      <div>
        <Feature />
      </div>
    </div>
  )
}
