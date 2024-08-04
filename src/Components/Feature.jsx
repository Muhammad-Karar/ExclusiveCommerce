import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


export default function Feature() {
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center m-16 space-y-4 lg:space-y-0 lg:space-x-0">
            <div className="flex flex-col items-center">
                <div className="bg-gray-200 p-2 rounded-full">
                    <div className="bg-black p-4 rounded-full">
                        <FontAwesomeIcon icon={faTruck} className="text-white text-2xl" />
                    </div>
                </div>
                <h3 className="font-bold mt-4 text-center">FREE AND FAST DELIVERY</h3>
                <p className="text-center">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-gray-200 p-2 rounded-full">
                    <div className="bg-black p-4 rounded-full">
                        <FontAwesomeIcon icon={faHeadset} className="text-white text-2xl" />
                    </div>
                </div>
                <h3 className="font-bold mt-4 text-center">24/7 CUSTOMER SERVICE</h3>
                <p className="text-center">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-gray-200 p-2 rounded-full">
                    <div className="bg-black p-4 rounded-full">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-white text-2xl" />
                    </div>
                </div>
                <h3 className="font-bold mt-4 text-center">MONEY BACK GUARANTEE</h3>
                <p className="text-center">We return money within 30 days</p>
            </div>
        </div>
    )
}
