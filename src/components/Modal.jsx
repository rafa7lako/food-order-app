import { forwardRef} from "react";

import { createPortal } from "react-dom";
import { CartContext } from "../store/cart-context";

const Modal = forwardRef(function Modal({ children }, ref) {
	// const formRef = useRef();



	return (
		<dialog ref={ref} className="modal">
			{children}
		</dialog>
	);
});

export default Modal;
