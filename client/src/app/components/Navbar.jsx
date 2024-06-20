import React from 'react';
import DropDownProfile from './DropDownProfile';
import Home from '../page';
import Link from 'next/link';


const Navbar = () => {
    return (
      <nav className="border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 border-b-2">
          <Link href="https://smartranks.co/" passHref>
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://i.imgur.com/PcOLLVm.png" className="h-16" alt="Flowbite Logo" />
            </a>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ul>
              <li>
                <Link href="/Home"> </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  