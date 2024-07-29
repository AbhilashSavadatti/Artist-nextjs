"use client";
import React, { useState } from 'react';

// Example concert data
const concertData = [
  {
    name: "Summer Music Festival",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJgAE0k0gDSS-HtqJUOGFFR2y6oo_9JSzt58jK-gtDyiax8CVNrdyBVzppOvdW",
    type: "Music Festival",
    date: "2024-08-15",
    link: "concert_inquiry"
  },
  {
    name: "Rock Legends Live",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJgAE0k0gDSS-HtqJUOGFFR2y6oo_9JSzt58jK-gtDyiax8CVNrdyBVzppOvdW",
    type: "Rock",
    date: "2024-09-10",
    link: "#"
  },
  {
    name: "Electronic Dance Night",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxYB4j9DVUnQtw0h5rXPXeHVXo1H40n_z0aNvTZMmIG-a0ZtevxuKXVxdxkYtV",
    type: "Electronic",
    date: "2024-10-20",
    link: "#"
  },
  {
    name: "Classical Harmony",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6JNdh7NMTUZjc-lwuajcdNtoxeVHRAM3_2H04GxCPIPuoVinfsuVx_k8y4_W",
    type: "Classical",
    date: "2024-11-05",
    link: "#"
  },
  {
    name: "Jazz Under the Stars",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoH0QxDGjQkC2FB9PdGyB6N4_P8w0GyDhmktxNqHbo_2_jeJ3xe9vGTYxivBWe",
    type: "Jazz",
    date: "2024-12-15",
    link: "#"
  },
  {
    name: "Pop Extravaganza",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1NLeWraoyI-qvf2r3I-24e1wktzEPn-7S5QY6sLUUcKc9dHETc4l_VnNFQZU",
    type: "Pop",
    date: "2024-11-25",
    link: "#"
  },
  {
    name: "Indie Rock Fest",
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnG_c6zoch0NM1a4Sl3FsvrOG1DC6SvLaJP-Bgep4odRtpQYzpUUPdeFYwGE3Q",
    type: "Indie Rock",
    date: "2024-09-22",
    link: "#"
  },
  {
    name: "Country Music Gala",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqjBFzatVELzg4Q4fXNurmX0kXzvk6iR_nWTKFPxCTjY0BLYXs5wNMioUEjI5J",
    type: "Country",
    date: "2024-08-30",
    link: "#"
  }
  // ...other concert items
];

function Page() {
  const [filterType, setFilterType] = useState('All');
  const [filterDate, setFilterDate] = useState('');

  const filteredConcerts = concertData.filter(concert =>
    (filterType === 'All' || concert.type === filterType) &&
    (filterDate === '' || concert.date === filterDate)
  );

  return (
    <>
      {/* Search Form */}
      <div className="w-full flex justify-start px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start max-w-3xl">
          <form
            id="concert_search"
            method="get"
            action=""
            className="flex flex-row gap-4 items-center w-full"
          >
            <div className="flex-1">
              <label className="block text-md font-medium text-gray-600">Search</label>
              <input
                type="text"
                name="search_query"
                autoComplete="off"
                className="px-4 py-2 block w-[200px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                placeholder="e.g., Summer Music Festival"
              />
            </div>
            <div>
              <input
                type="submit"
                name="search_concert"
                value="Search Concert"
                className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-sm cursor-pointer transition duration-150 ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full flex justify-start px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center max-w-3xl">
          {/* Type Filter */}
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
              Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out bg-white"
            >
              <option value="All">All</option>
              <option value="Music Festival">Music Festival</option>
              <option value="Rock">Rock</option>
              <option value="Electronic">Electronic</option>
              <option value="Classical">Classical</option>
              <option value="Jazz">Jazz</option>
              <option value="Pop">Pop</option>
              <option value="Indie Rock">Indie Rock</option>
              <option value="Country">Country</option>
            </select>
          </div>

          {/* Date Filter */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.75V3.75M19.25 6.25h-14.5A2.25 2.25 0 003 8.5v11A2.25 2.25 0 005.25 21h14.5A2.25 2.25 0 0022 18.75v-11A2.25 2.25 0 0019.25 6.25zM7.75 11.25a1.25 1.25 0 111.25-1.25 1.25 1.25 0 1.25 0 01-1.25 1.25z" />
              </svg>
              Date
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out bg-white"
            />
          </div>
        </div>
      </div>

      {/* Concerts Section */}
      <section
        id="Concerts"
        className="bg-white w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      >
        {filteredConcerts.map((concert) => (
          <div
            key={concert.name}
            className="bg-white max-w-xs w-full min-h-[500px] shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href={concert.link}>
              <img
                src={concert.imageUrl}
                alt={concert.name}
                className="w-full h-[370px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg mt-1 font-bold text-black capitalize">{concert.name}</h3>
                <p className="text-gray-600 mt-1">{concert.type}</p>
                <p className="text-gray-600 mt-1">{concert.date}</p>
                <a
                  href={concert.link}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 pb-2 mb-2 text-sm font-medium text-white transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                >
                  More Details
                </a>
              </div>
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Page;
