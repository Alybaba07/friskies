import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <>
    <div class="relative">
        <nav class="fixed top-0 right-0 left-0 z-50 bg-stone-950">
          <div className="gap-x-14 items-center max-w-7xl mx-auto px-4 md:flex md:px-8">
            <div className="flex items-center justify-between py-5 md:block">
              <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7 fill-white">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
              </a>
              <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 items-center mt-8 md:mt-0 md:flex hidden">
              <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-300 hover:text-gray-400">
                  <Link to='/Members'>Membres</Link>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <Link to='/Wrapped'>Rétrospective</Link>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <Link to='/News'>Actus</Link>
                </li>
                <li className="text-gray-300 hover:text-gray-400">
                  <Link to='/About'>A propos</Link>
                </li>
                <li>
                  <Link to='/Discord' className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 rounded-full md:inline-flex">Discord</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;