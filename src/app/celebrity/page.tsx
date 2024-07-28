import React from 'react';

function Page() {
  return (
    <>
      {/* Search Form */}
      <div className="w-full flex justify-center md:justify-start px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full max-w-3xl">
          <form
            id="artist_search"
            method="get"
            action=""
            className="flex flex-row sm:flex-row  gap-4 items-center w-full"
          >
            <div className="flex-1">
              <label className="block text-md font-medium text-gray-600">Search</label>
              <input
                type="text"
                name="search_query"
                autoComplete="off"
                className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
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

      {/* Artists Section */}
      <section
        id="Artists"
        className="bg-white w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      >
        {[
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
            link: "#"
          },
          {
            name: "Salman Khan",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/salman-khan-740x740.png",
            gender: "Male",
            link: "#"
          },
          {
            name: "Aishwarya Rai Bachchan",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/aishwarya-rai-740x740.png",
            gender: "Female",
            link: "#"
          },
          {
            name: "Aamir Khan",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/amir-khan-740x740.png",
            gender: "Male",
            link: "#"
          },
          {
            name: "Akshay Kumar",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/akshay-kumar-740x740.jpg",
            gender: "Male",
            link: "#"
          },
          {
            name: "Hrithik Roshan",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/hrithik-roshan-740x740.jpg",
            gender: "Male",
            link: "#"
          },
          {
            name: "Shahid Kapoor",
            imageUrl: "https://artistbookingcompany.com/wp-content/uploads/2024/03/shahid-kapoor-740x740.jpg",
            gender: "Male",
            link: "#"
          }
        ].map((artist, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl">
            <a href={artist.link}>
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-center items-center">
                  <p className="text-lg font-bold text-black capitalize">
                    {artist.name}
                  </p>
                  <span className="text-gray-400 ml-2 uppercase text-xs">[{artist.gender}]</span>
                </div>
                <div className="flex items-center mx-auto justify-center mt-2">
                  <a
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    href="inquiry"
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
