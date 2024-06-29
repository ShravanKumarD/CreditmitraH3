// Modal.js

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div onClick={onClose} className="onClose">
			<div className="modalView">{children}</div>
		</div>
	);
};

export default Modal;
