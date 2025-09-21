import React, { useState } from "react";

const AluminiStory = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="flex flex-col h-[40em] md:flex-row w-full bg-yellow-500 text-black -mt-10 mb-20">
      {/* Left Panel */}
      <div className="md:w-1/4 p-8 flex flex-col justify-center">
        <span className="bg-red-900 text-white text-sm px-3 py-1 rounded-full w-[8em] mb-4 -mt-[3em]">
          Success Story
        </span>
        <h2 className="text-3xl font-bold mb-4">#InspiringStories</h2>
        <p className="mb-6 text-2xl">
          We asked industry leaders and professionals to highlight individuals
          who exemplify growth, innovation, and perseverance. Explore their
          journeys, the lessons they’ve learned, and the milestones they’ve
          achieved in their fields.
        </p>
        <button className="bg-red-900 text-white py-2 px-4 rounded hover:bg-red-700 transition">
          Read More Stories
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-3/4 relative flex items-center justify-center bg-[#0A2540] py-12">
        <div className="relative w-[70em] h-[38em] border-4 border-yellow-500 rounded-xl overflow-hidden shadow-lg cursor-pointer">
          {playVideo ? (
            // Show video when clicked
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            // Cover image before click
            <img
              src="https://www.trcac.org.in/images/seminar1.jpg" // Cover image
              alt="Video Cover"
              className="w-full h-full object-cover"
              onClick={() => setPlayVideo(true)}
            />
          )}

          {/* Play button overlay */}
          {!playVideo && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-80 hover:opacity-100"
              onClick={() => setPlayVideo(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.518-3.76a1 1 0 00-1.5.866v7.488a1 1 0 001.5.866l6.518-3.76a1 1 0 000-1.732z"
                />
              </svg>
            </div>
          )}

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="bg-orange-500 rounded-lg p-2 inline-block text-white">
              <span className="text-xl font-bold">Alex Johnson</span>
              <br />
              <span className="text-sm font-normal">Technology & Innovation</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluminiStory;
