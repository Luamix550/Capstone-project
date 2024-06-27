import React from 'react'
export const Footer = () => {
  return (
    <footer className="backdrop-blur-xl bg-white/30 text-black py-8 border border-separate">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Apply to our job openings!</h2>
            <p>At Smart Talent, we want to help you find the ideal job through challenges aligned with industry needs.</p>
            <p className="mt-4">What are you waiting for to apply?</p>
            <a href="https://smartalentit.com" className="text-blue-400 hover:text-blue-300">Visit our page</a>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">I am a talent</h3>
            <p>+57 322 516 4187</p>
            <p><a href="mailto:info@smartalentit.com" className="text-blue-400 hover:text-blue-300">info@smartalentit.com</a></p>
            <p><a href="mailto:info@smartranks.co" className="text-blue-400 hover:text-blue-300">info@smartranks.co</a></p>
            </div>
            <div>
            <h3 className="text-lg font-semibold">I am a company</h3>
            <p>+57 314 861 8537</p>
            <p><a href="mailto:sales@smartalentit.com" className="text-blue-400 hover:text-blue-300">sales@smartalentit.com</a></p>
            </div>
        </div>
        </div>
    </div>
    </footer>
  )
}