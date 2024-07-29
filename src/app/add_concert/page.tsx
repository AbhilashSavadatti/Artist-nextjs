import React from 'react';

function Page() {
  return (
    <>
      <section className="ezy__about8 light pb-14 md:pb-24 bg-gray-50 text-zinc-900">
        <div className="relative bg-opacity-60 py-12">
          <div className="container mx-auto px-4">
            {/* Optional: Add a section header or introduction here */}
          </div>
        </div>
        <div className="mx-auto px-4 mt-5">
          <div className="flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
              <div className="w-full h-full border-4 border-transparent outline outline-[2px] outline-indigo-600 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border-indigo-500">
                <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-100 rounded-md">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 0a2 2 0 00-2 2v3.586a1 1 0 01-.293.707L5.707 7.707a1 1 0 000 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 000-1.414L10.293 6.293A1 1 0 0010 5.586V2a2 2 0 00-2-2zM6.5 5a.5.5 0 01.5.5v2.707L8.207 7.5a.5.5 0 01.707-.707l-1.5-1.5A.5.5 0 016.5 5zM9.5 8H11a1 1 0 01.832.445L13.293 10a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414L8.168 8.445A1 1 0 019.5 8z" clipRule="evenodd" />
                  </svg>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                  <p className="mt-2 text-sm text-gray-500">Upload an image</p>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Add Your Concert Section */}
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Add Your Concert</h2>
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="host-name">Host Name*</label>
                <input
                  type="text"
                  id="host-name"
                  name="host-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="event-name">Concert Name*</label>
                <input
                  type="text"
                  id="event-name"
                  name="event-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="timings-start">Start Time*</label>
                <input
                  type="time"
                  id="timings-start"
                  name="timings-start"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="timings-end">End Time*</label>
                <input
                  type="time"
                  id="timings-end"
                  name="timings-end"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="date">Date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="description">Description*</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter a brief description of the concert"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit 
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Page;
