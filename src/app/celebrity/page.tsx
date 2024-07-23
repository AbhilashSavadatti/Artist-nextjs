import React from 'react'

function page() {
  return (
    <>
    <div className="sw-full flex justify-center md:justify-start">
  <form className="justify-center sm:ml-10 md:ml-20 lg:ml-40 inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1 sm:p-2 md:p-3 lg:p-4">
    <div className="pt-2 mr-4 relative text-gray-600 items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-2 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <svg
          className="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="300px"
          height="300px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  </form>
</div>
    
    <section
  id="Artists"
  className="bg-white pr-20 pl-20 h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="Inquiry.html">
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