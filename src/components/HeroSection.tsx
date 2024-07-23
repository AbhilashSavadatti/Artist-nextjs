"use client";
import React from 'react'

function herosection() {
  return (
    <>

<div
  className=" page-header page-header_align_left bg-cover bg-no-repeat bg-center bg-[#644c98] h-[200px] mb-[40px] pt-[30px] pb-0"
  style={{
    backgroundImage:
      'url("https://artistbookingcompany.com/wp-content/uploads/2024/03/about-us-1.png")'
  }}
>
  <div className="flex justify-start page-header_wrapper">
    <div className="wgl-container">
      <div className="page-header_content">
        <div className="page-header_breadcrumbs text-white text-[20px] leading-[24px] ml-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-white">
              <li>
                <a href="#" className="block transition hover:text-gray-700">
                  <span className="sr-only"> Home </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
              <li className="rtl:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <a href="#" className="block transition hover:text-white">
                  {" "}
                  Concert{" "}
                </a>
              </li>
              <li className="rtl:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>





    
    
    
    </>
  )
}

export default herosection