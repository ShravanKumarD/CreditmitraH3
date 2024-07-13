import React, { useState } from "react";
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

export default function ApplicationForm({ isOpen, closeModal, children }) {
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Phone: '',
        email: '',
        contact: '',
    });

    if (!isOpen) return null;
    const handleClose = () => {
        setOpen(false);
        alert('Your response is saved. We will get back to you soon.');
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'contact') {
            const numericValue = value.replace(/\D/g, '');
            setFormData({
                ...formData,
                [name]: numericValue
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mobile = { contact: formData.contact };
        const mobileNumberPattern = /^[5-9]\d{9}$/;
        if (mobileNumberPattern.test(mobile.contact)) {
            console.log("Valid mobile number");
            handleClose();
        } else {
            alert("Please enter a valid mobile number");
        }
    };

    return (
        <>
          
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
              </div>
            </div>
    
        </>
    )
}
