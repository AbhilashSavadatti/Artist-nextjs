
import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="dropdown-menu"
            >
                <span>Profile</span>
                <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    aria-labelledby="dropdown-button"
                    id="dropdown-menu"
                    role="menu"
                >
                    <div className="px-4 py-3">
                        <p className="text-sm leading-5">Signed in as</p>
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                    </div>
                    <div className="py-1">
                        <a
                            href="javascript:void(0)"
                            tabIndex={0}
                            className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100"
                            role="menuitem"
                        >
                            Update Profile
                        </a>
                        <a
                            href="add_concert"
                            tabIndex={1}
                            className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100"
                            role="menuitem"
                        >
                            My Concert
                        </a>
                        <div className="py-1">
                            <a
                                href="login"
                                tabIndex={2}
                                className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100"
                                role="menuitem"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <style dangerouslySetInnerHTML={{__html: `
                .dropdown:focus-within .dropdown-menu {
                    opacity: 1;
                    transform: translate(0) scale(1);
                    visibility: visible;
                }
            `}} />
        </div>
    );
};

export default DropdownMenu;
