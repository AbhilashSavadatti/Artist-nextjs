"use client";
import React from 'react'
import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu'; 

function Header() {
  return (
    <>
      <div className="top-0 py-1 lg:py-2 w-full bg-white lg:relative z-50">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-8xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            <button className="ml-0">
              <div className="flex items-center space-x-2">
                <h2 className="text-black font-bold text-2xl">event duniya</h2>
              </div>
            </button>
            <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50">
              {/* component */}
              <div className="w-full text-gray-700 bg-white">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                  <div className="p-4 flex flex-row items-center justify-end">
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex-col justify-center flex-grow pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row">
                    <div className="relative max-w-[150px] py-2 pt-3">
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="index.html">Home</a>
                    </div>
                    <div className="relative max-w-[150px] py-2 pt-3">
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About Us</a>
                    </div>
                    
                      <Dropdown/>
                      <div className="relative max-w-[150px] py-2 pt-3">
                      <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="concert">Concert</a>  
                      </div>
                   
                  </nav>
                </div>
              </div>
            </div>
            <div className="hidden min-w-[250px] lg:flex lg:items-center gap-x-2">
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2">
                <a href="signup">Sign Up</a>
              </button>
              <DropdownMenu />
              <div className="flex items-center justify-center lg:hidden">
                <button className="focus:outline-none text-slate-200"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg></button>
              </div>
            </div>   
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;
