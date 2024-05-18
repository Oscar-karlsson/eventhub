'use client'
import React, { useState } from 'react'
import { IoTicketOutline } from "react-icons/io5";

function EventPage() {
  const [filter, setFilter] = useState('');
  const [sortType, setSortType] = useState('date'); // default sort type

  let events = [
    {
      title: 'New Year Celebration',
      date: '2022-12-31',
      time: '19:00',
      location: 'Central Park, New York',
      description: 'Join us to celebrate the New Year with live music, fireworks, and more!',
      image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
      category: 'Music & Arts'
    },
    {
      title: 'Tech Conference 2023',
      date: '2023-01-01',
      time: '09:00',
      location: 'Convention Center, San Francisco',
      description: 'Kick off the new year with the latest in tech at our annual conference.',
      image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
      category: 'Technology'
    },
    // Add more events as needed
  ];

  // Sort events based on sort type
  events = events.sort((a, b) => {
    if (sortType === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortType === 'location') {
      return a.location.localeCompare(b.location);
    }
  });

   // Filter events
   events = events.filter(event => event.title.includes(filter));

   return (
    <div className="p-4 bg-gray-400">
    <div className="flex justify-center items-center mb-4">
      <input 
        type="text" 
        placeholder="Filter events" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        className="p-2 border rounded text-gray-700"
      />
      <select 
        value={sortType} 
        onChange={(e) => setSortType(e.target.value)} 
        className="p-2 border rounded ml-2 text-gray-700"
      >
        <option value="date">Sort by date</option>
        <option value="location">Sort by location</option>
      </select>
    </div>
    {events.map((event, index) => (
   <div 
   key={index} 
   className="flex w-full justify-center my-4 cursor-pointer" 
   onClick={() => navigateToEventDetail(event.id)}
 >
    <img alt="event image" src={event.image} className="w-1/6 object-cover rounded-l"/>
    <div className="w-1/2 p-4 bg-gray-800 flex justify-between items-center rounded-r">
      <div>
        <p className="text-indigo-500 text-md font-medium">{event.title}</p>
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">{event.date} at {event.time}</p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">{event.location}</p>
        <div className="flex items-center mt-4">
          <p className="text-sm text-gray-500">{event.description}</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-sm text-gray-500">Category: {event.category}</p>
        </div>
      </div>
      <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-slate-100/10 transition-colors duration-200">
            <button className="p-2">
              <IoTicketOutline size={36} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)
}



export default EventPage