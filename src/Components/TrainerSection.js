import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrainerSection = () => {
  const navigate = useNavigate();

  const handleViewTeam = () => {
    navigate('/team'); 
  };

  return (
    <section className="bg-gray-400 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-400 mb-12">
          We are a team of experienced people, nutrition, sports, and fitness passionate experts with talent and knowledge unsurpassed in the industry. Get to know us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <img src="https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=" alt="Jordan Musk" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">Jordan Musk</h3>
            <p className="text-gray-400">Fitness Coach</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
          <img src="https://img.freepik.com/premium-photo/smiling-slim-woman-pink-tracksuit-looks-aside-copy-space-poses-with-rolled-mat-does-yoga-pilates-fitness-isolated-blue-background-advertisement-concepts_750854-1071.jpg?w=1060" alt="Jordan Musk" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">Jorg Kelvin</h3>
            <p className="text-gray-400">Aerobic</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
          <img src="https://img.freepik.com/free-photo/strong-man-without-t-shirt_158538-8390.jpg?w=1060&t=st=1681950065~exp=1681950665~hmac=6f29b029eda45cd576342d02652ba50e51c6dbb20f21559d5a634e42b3e7d9db" alt="Jordan Musk" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">Henrry Duike</h3>
            <p className="text-gray-400">Bodybuilding</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
          <img src="https://img.freepik.com/free-photo/portrait-smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8263.jpg?w=1060&t=st=1681949769~exp=1681950369~hmac=86473892a316f3a92a926aa56eef338b1b194078e51af01250442c0a816f6c26" alt="Jordan Musk" className="w-full rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">Ben Zuka</h3>
            <p className="text-gray-400">Athelete</p>
            </div>
            </div>
        <button 
          onClick={handleViewTeam} 
          className="bg-gray-700 text-white py-2 px-6 rounded-full"
        >
          See the Whole Team
        </button>
      </div>
    </section>
  );
};

export default TrainerSection;
