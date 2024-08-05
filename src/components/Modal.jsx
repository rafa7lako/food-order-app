import { forwardRef, useContext, useRef, useState } from "react";

import { createPortal } from "react-dom";
import { CartContext } from "../store/cart-context";

const Modal = forwardRef(function Modal({ children }, ref) {
	// const formRef = useRef();

	const { modalType, goToCheckoutFN } = useContext(CartContext);

	return (
		<dialog ref={ref} className="modal">
			{children}
			<form method="dialog" className="modal-actions">
				<button className="text-button">Close</button>
				<button
					type="button"
					className="button"
					onClick={modalType ? goToCheckoutFN : null}
				>
					{modalType === "cart" ? "Go to checkout" : "Submit order"}
				</button>
			</form>
		</dialog>
	);
});

export default Modal;
