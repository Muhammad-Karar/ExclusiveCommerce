import React, { useState, useEffect } from "react";
import MExproduct1 from '../assets/MExproduct1.png';


export default function PromoBanner() {

  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 4,
    minutes: 2,
    seconds: 56,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let { days, hours, minutes, seconds } = countdown;

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 59;
        minutes--;
      } else if (hours > 0) {
        minutes = 59;
        seconds = 59;
        hours--;
      } else if (days > 0) {
        hours = 0;
        minutes = 2;
        seconds = 59;
        days--;
      } else {
        clearInterval(interval);
      }

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);


  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mx-auto p-12 m-12 max-w-screen-xl">
  <div className='w-full md:w-1/2 h-auto space-y-6 md:space-y-18'>
    <h2 className="text-green-500 text-lg font-bold mt-2">Categories</h2>
    <h1 className="text-4xl font-bold w-full md:w-80">Enhance Your Music Experience</h1>
    <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6 mt-8">
      <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
        <p className="text-sm font-bold">{countdown.days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
        <p className="text-sm font-bold">{countdown.hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
        <p className="text-sm font-bold">{countdown.minutes}</p>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="text-center bg-white text-black rounded-full py-2 w-16 h-16">
        <p className="text-sm font-bold">{countdown.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
    <div className="flex justify-center md:justify-start mt-6">
      <button className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-700 hover:duration-700">
        Buy Now!
      </button>
    </div>
  </div>
  <div className='w-full md:w-1/2'>
    <img src={MExproduct1} alt="JBL Speaker" className="w-full max-w-lg mx-auto" />
  </div>
</div>

  )
}
