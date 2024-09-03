import React from 'react';

const MainSection = () => {
  return (
    <main className="relative flex items-center justify-between h-screen bg-[url('https://i.etsystatic.com/24456611/r/il/bfb984/3790413431/il_fullxfull.3790413431_795y.jpg')] bg-cover bg-center px-10">
      <div className="text-white max-w-lg z-10">
        <h1 className="text-4xl font-bold leading-tight mb-8">
          Take care of your <span className="text-red-500">body.</span> It's the only place you have to <span className="text-red-500">live.</span>
        </h1>
        <button
          onClick={() => window.location.href = '/register'}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 mt-4"
        >
          Join With Us
        </button>
      </div>

     
      <div className="flex justify-center items-center h-full pr-10 z-0">
        <div className="relative">
          <img
            src="https://www.maxxproboxing.com/wp-content/uploads/2023/06/shutterstock_640663666-768x574.jpg"
            alt="Gym Model"
            className="w-80 h-80 object-cover rounded-full border-[12px] border-red-500" 
          />
          
          <div className="absolute top-0 left-0 w-full h-full border-[10px] border-blue-500 border-t-[29px] border-l-[18px] rounded-full"></div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
