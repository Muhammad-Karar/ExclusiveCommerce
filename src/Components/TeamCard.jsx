import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function TeamCard({member}) {
    return (
        <div className="bg-white rounded-sm overflow-hidden shadow-lg flex flex-col items-center text-center">
            <div className="bg-gray-100">
            <img src={member.image} alt={member.name} className="h-60 w-64 pt-2 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
            <div className="flex space-x-4 mt-4 mb-2">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-500">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
            </div>
        </div>
    )
}

