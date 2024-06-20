import React from 'react'

const Navbar = () => {
return (
    <nav className=" border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 border-b-2">
            <a href="https://smartranks.co/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://i.imgur.com/PcOLLVm.png" className="h-16" alt="Flowbite Logo" />
            </a>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">

            </div>
        </div>
    </nav>
  )
}

export default Navbar