import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Gym Scheduler
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Easily manage and track your gym schedule.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
