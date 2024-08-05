import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function CartButtons() {
	const { modalType, goToCheckoutFN, handleCloseCart } = useContext(CartContext);

	return (
		<p className="modal-actions">
			<button type="button" className="text-button" onClick={handleCloseCart}>Close</button>
			<button
				type={modalType === "cart" ? "button" : "submit"}
				className="button"
				onClick={modalType ? goToCheckoutFN : null}
			>
				{modalType === "cart" ? "Go to checkout" : "Submit order"}
			</button>
		</p>
	);
}
