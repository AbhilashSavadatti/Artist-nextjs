import React from 'react'

function page() {
  return (
    <>


    <div className="ml-40 sw-full flex justify-center md:justify-start ">
    <div className="flex justify-start mt-1 ">
    <div className="w-full max-w-3xl ">
      <form id="artist_search" method="get" action="" className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-row gap-4 items-center align-middle">
        <div className="flex-1">
          <label className="block text-m font-medium text-black">Search</label>
          <input
            type="text"
            name="search_query"
            autoComplete="off"
            className="px-3 py-2 form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm h-12 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition duration-150 ease-in-out"
            placeholder="e.g., Amitabh Bachchan"
          />
        </div>
        <div>
          <input
            type="submit"
            name="search_celebrity"
            value="Search Celebrity"
            className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-sm cursor-pointer transition duration-150 ease-in-out"
          />
        </div>
      </form>
    </div>
  </div>
</div>
    


    <section
  id="Artists"
  className="bg-white pr-20 pl-20 h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="inquiry">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/amitabh-bacchan-740x740.jpg"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Amitabh Bachchan
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/shahrukh-khan-740x740.png"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Shahrukh Khan
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/salman-khan-740x740.png"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">Salman Khan</p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/aishwarya-rai-740x740.png"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Aishwarya Rai Bachchan
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Female]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/amir-khan-740x740.png"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">Aamir Khan</p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/akshay-kumar-740x740.jpg"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Akshay Kumar
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/hrithik-roshan-740x740.jpg"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Hrithik Roshan
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img
        src="https://artistbookingcompany.com/wp-content/uploads/2024/03/shahid-kapoor-740x740.jpg"
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="mx-auto py-10">
        <div className="flex justify-center items-center">
          <p className="text-lg font-bold text-black capitalize">
            Shahid Kapoor
          </p>
          <span className="text-gray-400 ml-2 uppercase text-xs">[Male]</span>
        </div>
      </div>
    </a>
  </div>
</section>

    
    
    </>
  )
}

export default page