"use client";
import React from 'react'
import Dropdown from './Dropdown';

function Header() {
  return (
    <>

<div className=" top-0 py-1 lg:py-2 w-full bg-white lg:relative z-50">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-8xl  mx-auto px-5 py-2.5 lg:border-none lg:py-4 ">
          <div className="flex items-center justify-between ">
            <button className="ml-0">
              <div className="flex items-center space-x-2">
                <h2 className="text-black dark:text-black font-bold text-2xl">event duniya</h2>
              </div>
            </button>
            <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50">
              {/* component */}
              <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                  <div className="p-4 flex flex-row items-center justify-end">
                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <nav className=" flex-col justify-center flex-grow pb-4 md:pb-0 hidden md:flex md:justify-center md:flex-row">
                    <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="index.html">Home</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About Us</a>
                    <div className="">
                        <Dropdown/>
                    </div>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Ask an Expert</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">I am an Artist</a>
                    <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="concert">Concert</a>  
                  </nav>
                </div>
              </div>
            </div>
            <div className="hidden min-w-[250px] lg:flex lg:items-center gap-x-2">
              <button className=" px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-gray-50 rounded-xl flex items-center gap-2 ">
                <a href="signup">Sign Up</a>
              </button>
              <div className=" bg-white flex flex-col justify-center">
                <div className="block px-4 py-3  leading-loose text-xs text-center font-semibold leading-none rounded-xl">
                  <div className=" relative inline-block text-left dropdown">
                    <span className="rounded-md shadow-sm"><button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                        <span>profile</span>
                        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </button></span>
                    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <div className="px-4 py-3">         
                          <p className="text-sm leading-5">Signed in as</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                        </div>
                        <div className="py-1">
                          <a href="javascript:void(0)" tabIndex={0} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Update Profile</a>
                          <a href="javascript:void(0)" tabIndex={1} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">My Concert</a>
                          <div className="py-1">
                            <a href="login" tabIndex={3} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Sign out</a></div>
                        </div>
                      </div>
                    </div>
                  </div>              
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n.dropdown:focus-within .dropdown-menu {\n  opacity:1;\n  transform: translate(0) scale(1);\n  visibility: visible;\n}\n    " }} />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <button className="focus:outline-none text-slate-200 dark:text-white"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg></button>
              </div>
            </div>   
          </div></nav>
      </div>
    
    
    </>
  )
}

export default Header