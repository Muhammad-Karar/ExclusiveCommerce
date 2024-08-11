import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSackDollar, faCircleDollarToSlot, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const history = [
    { id: 1, icon: faStore, Rate: '10.5k', disc: 'Sallers active our site' },
    { id: 2, icon: faCircleDollarToSlot, Rate: '33k', disc: 'Monthly Product sale' },
    { id: 3, icon: faBagShopping, Rate: '45.5k', disc: 'Customer active in out site' },
    { id: 4, icon: faSackDollar, Rate: '25k', disc: 'Anual gross sale in our site' },
];

export default function StatSection() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {history.map((index) => (
                <div
                    className="h-48 w-60 space-y-2 border rounded-md flex flex-col mt-4
            items-center justify-center cursor-pointer p-4 shadow-lg 
            hover:bg-red-500 hover:text-white group hover:duration-700">
                    <div className="bg-gray-200 p-2 rounded-full">
                        <div className="bg-black p-4 rounded-full group-hover:bg-white group-hover:duration-700">
                            <FontAwesomeIcon icon={index.icon} className="text-3xl text-white group-hover:text-black  group-hover:duration-700" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold">{index.Rate}</h2>
                    <p className="text-md text-gray-600 group-hover:text-white group-hover:duration-700">{index.disc}</p>
                </div>
            ))}
        </div>
    )
}
