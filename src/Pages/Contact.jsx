import React, { useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data
    const formData = {
      access_key: "27615a41-138e-46ff-8cfc-241a0b4fbada",
      name,
      email,
      phone,
      message
    };

    const json = JSON.stringify(formData);

    // Submit the form data
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    // Handle the response
    if (res.success) {
      Swal.fire({
        title: "Message sent Successfully!",
        text: "Thank you for contacting us!",
        icon: "success"
      });

      // Clear the form fields by resetting state
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <div className="mt-20">
      <BreadCrumb />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl bg-white m-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information Section */}
            <div className="w-full md:w-1/3 p-4 border border-gray-100 rounded-md mb-8 md:mb-0 shadow-lg">
              <div className="py-4 mx-4 border-b-2 border-black">
                <div className="flex items-center my-2 gap-4">
                  <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
                    <FontAwesomeIcon icon={faPhone} className="h-6 w-7 text-white" />
                  </div>
                  <h3 className="text-md font-semibold">Call To Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">We are available 24/7, 7 days a week.</p>
                  <p className="text-gray-800 text-sm">Phone: +8801611112222</p>
                </div>
              </div>
              <div className="py-4 mx-4">
                <div className="flex items-center my-4 gap-4">
                  <div className="flex-shrink-0 bg-red-500 p-3 rounded-full">
                    <FontAwesomeIcon icon={faEnvelope} className="h-6 w-7 text-white" />
                  </div>
                  <h3 className="text-md font-semibold">Write To Us</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-gray-800 text-sm font-bold">Emails: exclusive11012@gmail.com</p>
                  <p className="text-gray-800 text-sm font-bold">Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}

            <div className="w-full md:w-2/3 p-6 border border-gray-100 rounded-md shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-ray-300 rounded-sm mb-4 md:mb-0 bg-gray-100"
                  />
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-sm mb-4 md:mb-0 bg-gray-100"
                  />
                  <input
                    type="text"
                    placeholder="Your Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-sm bg-gray-100"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-sm mt-4 bg-gray-100"
                  rows="6"
                ></textarea>
                <div className="grid justify-items-end">
                  <button type='submit' className="bg-red-400 text-white font-semibold p-3 rounded-lg 
                mt-4 w-full md:w-40 hover:bg-red-600 hover:duration-700">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
