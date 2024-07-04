import React from 'react';
import MExproduct1 from '../assets/MExproduct1.png';


export default function PromoBanner() {
  return (
    <div className="bg-black text-white flex items-center space-x-12 mx-auto p-12 m-12 max-w-screen-xl">
      <div className='w-1/2 h-80 space-y-10'>
        <h2 className="text-green-500 text-lg font-bold mt-2">Categories</h2>
        <h1 className="text-4xl font-bold w-80">Enhance Your Music Experience</h1>
        <div className="flex space-x-6 mt-8">
          <div className="text-center bg-white rounded-full text-black w-16 h-16">
            <div className="text-xl font-bold">23</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="text-center bg-white text-black rounded-full w-16 h-16">
            <div className="text-xl font-bold">05</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="text-center bg-white text-black rounded-full w-16 h-16">
            <div className="text-xl font-bold">59</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-center bg-white text-black rounded-full w-16 h-16">
            <div className="text-xl font-bold">35</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
        <button className="mt-6 bg-green-500 text-white font-bold py-4 px-10 rounded 
        hover:bg-green-700 hover:duration-700">Buy Now!</button>
      </div>
      <div className='w-1/2'>
        <img src={MExproduct1} alt="JBL Speaker" className="w-full max-w-lg" />
      </div>
    </div>
  )
}
