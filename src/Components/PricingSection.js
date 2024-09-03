import React from 'react';

const PricingSection = () => {
  return (
    <section className="relative bg-black text-white py-20">
     
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/55de29116380159.6060f9670d5b0.jpg')" }}></div>
      
      
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-6xl font-extrabold mb-6">
          YOUR <span className="text-green-400">PLAN</span> YOUR <span className="text-green-400">CHOICE</span>
        </h1>
      </div>

      
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6">

        
        <div className="bg-green-200 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
          <span className="bg-green-400 text-black font-semibold px-4 py-1 rounded-full text-sm">POPULAR</span>
          <h3 className="text-2xl font-bold mt-4 mb-4">Day Pass</h3>
          <p className="text-green-400 text-5xl font-extrabold mb-2">$20</p>
          <p className="text-gray-400 mb-4">/ pass</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>1 Day Pass</li>
            <li>Free Gym Access</li>
            <li>24 Hour Access</li>
          </ul>
          <button className="bg-white text-black py-2 px-8 rounded-full font-semibold">Buy Now</button>
        </div>

       
        <div className="bg-pink-400 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
          <span className="bg-green-400 text-black font-semibold px-4 py-1 rounded-full text-sm">GOLDEN</span>
          <h3 className="text-2xl font-bold mt-4 mb-4">Month to Month</h3>
          <p className="text-green-400 text-5xl font-extrabold mb-2">$35</p>
          <p className="text-gray-700 mb-4">/ month</p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>No Contract</li>
            <li>Free Gym Access</li>
            <li>1 Group Class Included</li>
          </ul>
          <button className="bg-black text-white py-2 px-8 rounded-full font-semibold">Buy Now</button>
        </div>

        
        <div className="bg-green-200 p-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
          <span className="bg-green-400 text-black font-semibold px-4 py-1 rounded-full text-sm">PROFESSIONAL</span>
          <h3 className="text-2xl font-bold mt-4 mb-4">Annual Plan</h3>
          <p className="text-green-400 text-5xl font-extrabold mb-2">$50</p>
          <p className="text-gray-400 mb-4">/ year</p>
          <ul className="text-gray-400 space-y-2 mb-6">
            <li>Free Gym Access</li>
            <li>24 Hour Access</li>
            <li>All Classes Included</li>
          </ul>
          <button className="bg-white text-black py-2 px-8 rounded-full font-semibold">Buy Now</button>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
