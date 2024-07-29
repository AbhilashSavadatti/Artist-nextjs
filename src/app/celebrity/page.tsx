"use client";
import React, { useState } from 'react';

const celebrityData = [
  {
    name: "Amitabh Bachchan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/amitabh-bacchan-740x740.jpg",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Shahrukh Khan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/shahrukh-khan-740x740.png",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Salman Khan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/salman-khan-740x740.png",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Aishwarya Rai Bachchan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/aishwarya-rai-740x740.png",
    gender: "Female",
    link: "inquiry"
  },
  {
    name: "Aamir Khan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/amir-khan-740x740.png",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Akshay Kumar",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/akshay-kumar-740x740.jpg",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Hrithik Roshan",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/hrithik-roshan-740x740.jpg",
    gender: "Male",
    link: "inquiry"
  },
  {
    name: "Shahid Kapoor",
    imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/shahid-kapoor-740x740.jpg",
    gender: "Male",
    link: "inquiry"
  }
];

function Page() {
  const [filterGender, setFilterGender] = useState('All');

  const filteredCelebrities = celebrityData.filter(celebrity => 
    filterGender === 'All' || celebrity.gender === filterGender
  );

  return (
    <>
      {/* Search Form */}
      <div className="w-full flex justify-start md:justify-start px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start max-w-3xl">
          <form
            id="celebrity_search"
            method="get"
            action=""
            className="flex flex-row sm:flex-row gap-4 items-center w-full"
          >
            <div className="flex-1">
              <label className="block text-md font-medium text-gray-600">Search</label>
              <input
                type="text"
                name="search_query"
                autoComplete="off"
                className="px-4 py-2 block w-[200px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                placeholder="e.g., Amitabh Bachchan"
              />
            </div>
            <div>
              <input
                type="submit"
                name="search_celebrity"
                value="Search Celebrity"
                className="bg-indigo-600 mt-6 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-sm cursor-pointer transition duration-150 ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full flex justify-start md:justify-start px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center max-w-3xl">
          {/* Gender Filter */}
          <div className="flex-1">
            <label className="block text-md font-medium text-gray-600 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-gray-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M3 6h18" />
              </svg>
              Gender
            </label>
            <select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out bg-white"
            >
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>


      {/* Celebrities Section */}
      <section
        id="Celebrities"
        className="bg-white w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      >
        {filteredCelebrities.map((celebrity, index) => (
          <div key={index} className="bg-white max-w-xs w-full h-[500px] shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl">
            <a href={celebrity.link}>
              <img
                src={celebrity.imageUrl}
                alt={celebrity.name}
                className="w-full h-[370px] object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-black capitalize">
                  {celebrity.name}
                </p>
                <div className="mt-2">
                  <a
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    href={celebrity.link}
                  >
                    Book
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Page;
