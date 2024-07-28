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
        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="col-span-1 lg:col-span-1 flex justify-center items-center">
              <div className="border-[15px] border-transparent outline outline-[3px] outline-indigo-600 rounded-full w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your concert image URL
                  alt="Concert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-1 mb-6 lg:mb-0">
              <div className="relative">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  Epic Concert Event
                </h1>
                <p className="opacity-75 mb-2 text-sm md:text-base leading-relaxed">
                  Join us for an unforgettable night at the Epic Concert Event! Featuring a lineup of renowned artists and musicians, this event promises a spectacular experience filled with vibrant performances and memorable moments. From exhilarating live music to engaging stage presence, the concert will showcase the best talent in the industry. The venue will be transformed into a magical space, offering an immersive experience for all attendees. Whether you're a long-time fan or new to the music scene, this concert is an event you won't want to miss. Mark your calendar and get ready for an evening of excitement and entertainment!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Inquire Now</h2>
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
                <label className="block text-sm font-semibold mb-2" htmlFor="event-name">Name*</label>
                <input
                  type="text"
                  id="event-name"
                  name="event-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="timings-start">Timings Start*</label>
                <input
                  type="time"
                  id="timings-start"
                  name="timings-start"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="timings-end">Timings End*</label>
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
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Page;
