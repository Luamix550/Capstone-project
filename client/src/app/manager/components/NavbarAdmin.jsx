import React, { useEffect } from 'react';
import { useAuth } from '../../context/authContext';

/**
 * Navbar component that displays the navigation bar with user information and log out functionality.
 * Uses the useAuth context to access user data and the logOut function.
 */
const Navbar = () => {
  const { user, profile, logOut } = useAuth();

  // Call the profile function once when the component mounts to fetch user profile data
  useEffect(() => {
    profile();
  }, []);

  return (
    <nav className="shadow-lg flex justify-between items-center mx-auto max-w-screen p-6 bg-white">
      {/* Logo Section */}
      <a href="https://smartranks.co/" className="flex pr-12 items-center rtl:space-x-reverse hover:scale-95 transition duration-300">
        <img src="https://i.imgur.com/PcOLLVm.png" className="h-14 pl-4" alt="SmartRank" />
      </a>
      
      {/* User Information Section */}
      <div className="flex items-center space-x-4">
        <div className='flex flex-col items-center'>
          <button className="block h-16 w-16 rounded-full overflow-hidden border-2 hover:border-gray-900 object-cover hover:scale-110 transition duration-300">
            <img src={`https://gravatar.com/avatar/${user.avatar}?d=mp`} alt="Your avatar" />
          </button>
          <p>{user.name}</p>
        </div>
        
        {/* Log Out Button */}
        <div className='relative flex items-center'>
          <div className='flex space-x-4'>
            <button className='hover:scale-110 transition duration-300 rounded-md border-2 hover:border-gray-900'
              onClick={logOut}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 sm:right-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
