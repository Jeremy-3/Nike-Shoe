import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        
        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-2"><strong>Address:</strong> 123 Nike St, Portland, OR, USA</p>
          <p className="text-gray-600 mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-gray-600 mb-4"><strong>Email:</strong> contact@nike.com</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Optional: Google Maps Embed */}
      <div className="mt-12 w-full max-w-4xl">
        <iframe
          className="w-full h-64 border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.202943651667!2d-122.683118684586!3d45.520408579092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950d5c7d5d09e1%3A0x4211c8e6b477f0!2sNike%2C%20Inc.!5e0!3m2!1sen!2sus!4v1661526154254!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
