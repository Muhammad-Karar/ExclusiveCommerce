import React from 'react';
import NAbgp1 from '../assets/NAbgp1.png';
import NAbgp2 from '../assets/NAbgp2.png';
import NAbgp3 from '../assets/NAbgp3.png';
import NAbgp4 from '../assets/NAbgp4.png';


export default function NewArrival() {
    return (
        <div className="container mx-auto py-10 max-w-screen-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="bg-red-500 w-4 h-10 rounded-md mr-4"></div>
                    <h1 className="text-2xl font-bold text-red-500">Featured</h1>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-gray-800 mt-3">
                        New Arrival
                    </h2>
                </div>
            </div>
            <div className="flex flex-wrap -m-2 mt-2">
                <div className="w-full lg:w-3/6 p-2">
                    <div className="bg-black text-white rounded-lg overflow-hidden relative " style={{ height: '550px' }}>
                        <img src={NAbgp1} alt="PlayStation 5" className="w-full h-full pt-10 object-scale-down" />
                        <div className="absolute bottom-4 left-4 space-y-2">
                            <h2 className="text-xl font-bold">PlayStation 5</h2>
                            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                            <button className="mt-2 px-2 py-2 text-white font-bold hover:underline underline-offset-4">Shop Now</button>
                            </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/6 p-2">
                    <div className="flex flex-wrap -m-2">
                        <div className="w-full p-2">
                            <div className="bg-black text-white rounded-lg overflow-hidden relative">
                                <img src={NAbgp2} alt="Women's Collections" className="w-full pl-52 object-scale-down" />
                                <div className="absolute bottom-4 left-4 space-y-2">
                                    <h2 className="text-xl font-bold">Women’s Collections</h2>
                                    <p className="text-sm">Featured women collections that give you another vibe.</p>
                                    <button className="mt-2 px-2 py-2 text-white font-bold hover:underline underline-offset-4">Shop Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-2">
                            <div className="bg-black text-white rounded-lg overflow-hidden relative">
                                <img src={NAbgp3} alt="Speakers" className="w-full p-8 h-64 object-scale-down" />
                                <div className="absolute bottom-4 left-4 space-y-2">
                                    <h2 className="text-xl font-bold">Speakers</h2>
                                    <p className="text-sm">Amazon wireless speakers</p>
                                    <button className="mt-2 px-2 py-2 text-white font-bold hover:underline underline-offset-4">Shop Now</button>
                                    </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-2">
                            <div className="bg-black text-white rounded-lg overflow-hidden relative">
                                <img src={NAbgp4} alt="Perfume" className="w-full p-8 h-64 object-scale-down" />
                                <div className="absolute bottom-4 left-4 space-y-2">
                                    <h2 className="text-xl font-bold">Perfume</h2>
                                    <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                                    <button className="mt-2 px-2 py-2 text-white font-bold hover:underline underline-offset-4">Shop Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
