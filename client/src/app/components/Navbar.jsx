import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
        <a href="https://smartranks.co/" className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-95 transition duration-300">
          <img src="https://i.imgur.com/PcOLLVm.png" className="h-14" alt="SmartRank" />
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className='relative'>
            <button
              className="block h-12 w-12 rounded-full overflow-hidden border-2 focus:border-gray-900"
              onClick={toggleDropdown}
            >
              <img className="h-full w-full object-cover" src="https://ca.slack-edge.com/T0423U1MW21-U0614Q8SG5A-c0a8883acfc6-512" alt="Your avatar" />
            </button>
            {isOpen && (
              <div className='absolute mt-2 w-28 bg-white border-2 rounded-lg shadow-md right-0'>
                <button 
                  onClick={() => router.push("/pages")} 
                  className='block px-5 py-2 text-gray-800 hover:bg-gray-100 w-full text-left'
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
