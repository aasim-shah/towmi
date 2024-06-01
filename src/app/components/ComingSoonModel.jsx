import React from 'react';
import Modal from 'react-modal';


const CustomModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Coming Soon Modal"
            className="bg-white rounded-lg shadow-lg p-6 w-[30vw] mx-auto mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
            <h2 className="text-xl font-semibold mb-4">Coming Soon 🚀</h2>
            <p className="text-gray-700 mb-6">Our App is under maintenance. We will get back soon. Stay tuned!</p>
            <button
                className="bgClr hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
                onClick={onClose}
            >
                Close
            </button>
        </Modal>
    );
};

export default CustomModal;
