import React, { useEffect, useState } from 'react';
import {Button} from "@nextui-org/react";
import Modal from './Modal';

export default function ModalCategory({enterModal, onClose, feedback }) {
  const [category, setCategory] = useState(null);
  const [opModal, setOpModal] = useState(false);

  const  openModal = (category) => {
    setOpModal(true);
    setCategory(category);
  }

  const closeModal = () => {
    setOpModal(false);
  }

  if (!enterModal) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto shadow-2xl">
        <div className="flex justify-between items-center mb-4">
        {/* <h2 className="flex flex-col items-center text-xl font-semibold text-black gap-1 ml-14">Select the category of your<span className='text-green-600'>feedback</span></h2> */}
        <h2 className="flex flex-col items-center text-xl font-semibold text-black gap-1 ml-8 md:ml-14">Select the category of your<span className='text-green-600'>feedback</span></h2>
          <button onClick={onClose} className="text-sm text-black font-bold py-1.5 px-1.5 rounded-full mb-20 md:mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <div className='flex flex-col'>
        <div className='flex flex-col items-center gap-2'>
          <Button radius="full" className="bg-gradient-to-tr w-40 from-green-500 to-green-800 text-white font-bold shadow-lg hover:scale-110 transition duration-300" onClick={() => openModal('Congratulations')}>
            Congratulations
          </Button>
          <Button radius="full" className="bg-gradient-to-tr w-40 from-green-500 to-green-800 text-white font-bold shadow-lg hover:scale-110 transition duration-300" onClick={() => openModal('Complaint')}>
            Complaint
          </Button>
          <Button radius="full" className="bg-gradient-to-tr w-40 from-green-500 to-green-800 text-white font-bold shadow-lg hover:scale-110 transition duration-300" onClick={() => openModal('Suggestion')}>
            Suggestion
          </Button>
        </div>
        </div>
      </div>
      <Modal isOpen={opModal} onClose={closeModal} onAddFeedback={feedback} category={category} prevCloseModal={onClose}/> 
    </div>
  )
}
