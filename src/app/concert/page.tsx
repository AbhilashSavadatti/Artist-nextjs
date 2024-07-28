import React from 'react';

function Page() {
  return (
    <>
      {/* Search Form */}
      <div className="w-full flex justify-center md:justify-start px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center w-full max-w-3xl">
          <form
            id="concert_search"
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
                className="px-4 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                placeholder="e.g., Summer Music Festival"
              />
            </div>
            <div>
              <input
                type="submit"
                name="search_concert"
                value="Search Concert"
                className="bg-indigo-600 mt-6 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-sm cursor-pointer transition duration-150 ease-in-out"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Concerts Section */}
      <section
        id="Concerts"
        className="bg-white w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8"
      >
        {[
          {
            name: "Summer Music Festival",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJgAE0k0gDSS-HtqJUOGFFR2y6oo_9JSzt58jK-gtDyiax8CVNrdyBVzppOvdW",
            link: "#"
          },
          {
            name: "Rock Legends Live",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJgAE0k0gDSS-HtqJUOGFFR2y6oo_9JSzt58jK-gtDyiax8CVNrdyBVzppOvdW",
            link: "#"
          },
          {
            name: "Electronic Dance Night",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxYB4j9DVUnQtw0h5rXPXeHVXo1H40n_z0aNvTZMmIG-a0ZtevxuKXVxdxkYtV",
            link: "#"
          },
          {
            name: "Classical Harmony",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6JNdh7NMTUZjc-lwuajcdNtoxeVHRAM3_2H04GxCPIPuoVinfsuVx_k8y4_W",
            link: "#"
          },
          {
            name: "Jazz Under the Stars",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoH0QxDGjQkC2FB9PdGyB6N4_P8w0GyDhmktxNqHbo_2_jeJ3xe9vGTYxivBWe",
            link: "#"
          },
          {
            name: "Pop Extravaganza",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1NLeWraoyI-qvf2r3I-24e1wktzEPn-7S5QY6sLUUcKc9dHETc4l_VnNFQZU",
            link: "#"
          },
          {
            name: "Indie Rock Fest",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnG_c6zoch0NM1a4Sl3FsvrOG1DC6SvLaJP-Bgep4odRtpQYzpUUPdeFYwGE3Q",
            link: "#"
          },
          {
            name: "Country Music Gala",
            imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqjBFzatVELzg4Q4fXNurmX0kXzvk6iR_nWTKFPxCTjY0BLYXs5wNMioUEjI5J",
            link: "#"
          }
        ].map((concert, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden duration-500 hover:scale-105 hover:shadow-xl">
            <a href={concert.link}>
              <img
                src={concert.imageUrl}
                alt={concert.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-bold text-black capitalize">
                  {concert.name}
                </p>
                <div className="mt-2">
                  <a
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-transform transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    href="#"
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
