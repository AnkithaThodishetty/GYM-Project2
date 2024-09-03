import React from 'react';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  const handleLearnMoreClick = () => {
    alert('Clicked from the about us section');
  };

  return (
    <div className="relative">
      
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/sjwqxtUpUXR7PSmhNoLS2G.jpg')", zIndex: -1 }}></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        
        <div className="flex flex-wrap items-center justify-between mb-12 bg-white bg-opacity-70 rounded-lg shadow-lg p-6">
          
          <div className="w-full md:w-5/12 p-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <ReactPlayer
                url="https://youtu.be/IpUQElrETw4?feature=shared"
                controls
                width="100%"
                height="50vh"
                className="transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-0 right-0 border-t-8 border-r-8 border-red-500 w-16 h-16 transform rotate-45 translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-red-500 w-16 h-16 transform rotate-45 -translate-x-4 -translate-y-4"></div>
            </div>
          </div>

          
          <div className="w-full md:w-6/12 p-4">
            <h2 className="text-4xl font-extrabold text-red-600 mb-6">About Us</h2>
            <p className="text-gray-800 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis. Laoreet amet urna venenatis at. Diam fames senectus feugiat est gravida bibendum. Rhoncus donec justo aliquam a blandit tellus elit consectetur convallis.
            </p>
            <button
              className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex flex-wrap items-center justify-between bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          
          <div className="w-full md:w-6/12 p-4">
            <h2 className="text-4xl font-extrabold text-red-600 mb-6">Why Choose Us?</h2>
            <ul className="text-gray-800 list-disc pl-6 space-y-4">
              <li><strong className="text-red-600">Consultations with Expert:</strong> Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis.</li>
              <li><strong className="text-red-600">Best Workout Facilities:</strong> Lorem ipsum dolor sit amet consectetur. Arcu amet volutpat a rhoncus morbi iaculis ultricies lobortis.</li>
            </ul>
          </div>

          
          <div className="w-full md:w-5/12 p-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <ReactPlayer
                url="https://youtu.be/eaRQF-7hhmo?feature=shared"
                controls
                width="100%"
                height="50vh"
                className="transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-0 right-0 border-t-8 border-r-8 border-red-500 w-16 h-16 transform rotate-45 translate-x-4 translate-y-4"></div>
              <div className="absolute bottom-0 left-0 border-b-8 border-l-8 border-red-500 w-16 h-16 transform rotate-45 -translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
