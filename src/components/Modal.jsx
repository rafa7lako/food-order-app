import { forwardRef, useRef, useState } from "react";

import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
	{ children, buttonText, toCheckoutBtn, modalType },
	ref
) {	
	// const formRef = useRef();




	return (
		<dialog ref={ref} className="modal">
			{children}
			<form method="dialog" className="modal-actions">
				<button className="text-button">Close</button>
				<button
					type="button"
					className="button"
					onClick={modalType ? toCheckoutBtn : null}
				>
					{buttonText}
				</button>
			</form>
		</dialog>
	);
});

export default Modal;
