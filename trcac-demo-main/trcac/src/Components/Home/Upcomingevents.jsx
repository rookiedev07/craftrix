'use client';
import React, { useEffect, useRef } from "react";

const events = [
  { id: 1, title: "Tech Fest 2025", date: "Oct 21, 2025" },
  { id: 2, title: "Cultural Night", date: "Nov 10, 2025" },
  { id: 3, title: "Entrepreneurship Summit", date: "Dec 05, 2025" },
  { id: 4, title: "Hackathon 2025", date: "Jan 15, 2026" },
  { id: 5, title: "Sports Week", date: "Feb 02, 2026" },
];

const UpcomingEvents = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the content to create seamless loop
    const clone = container.innerHTML;
    container.innerHTML += clone;

    let animationFrame;

    const scroll = () => {
      scrollRef.current.y += 0.3; // speed
      if (scrollRef.current.y >= container.scrollHeight / 2) {
        scrollRef.current.y = 0;
      }
      container.scrollTop = scrollRef.current.y;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause auto-scroll on hover to allow manual scrolling
    container.addEventListener("mouseenter", () => cancelAnimationFrame(animationFrame));
    container.addEventListener("mouseleave", () => {
      animationFrame = requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full md:w-1/3 h-[420px] bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden -ml-[50em] mt-10">
      <h3 className="text-center text-xl font-bold text-gray-800 py-4 border-b">
        Upcoming Events
      </h3>
      <div
        ref={containerRef}
        className="flex flex-col gap-4 overflow-y-auto h-[360px] px-6 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors rounded-md px-2"
          >
            <p className="font-medium text-gray-800">{event.title}</p>
            <span className="text-xs text-gray-500">{event.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
