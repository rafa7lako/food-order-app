import { useContext, forwardRef } from "react";

import { CartContext } from "../store/cart-context";

const CheckoutModal = forwardRef(function CheckoutModal({}, ref) {

	const { items, calculateTotal } = useContext(CartContext);

	

	return (
		<>
			<h2>Checkout</h2>
			<p>Total Amount: ${calculateTotal()}</p>
			<form>
				<div className="control">
					<label htmlFor="name">Full name:</label>
					<input type="text" name="name" />
				</div>
				<div className="control">
					<label htmlFor="email">E-Mail Address:</label>
					<input type="email" name="email" />
				</div>
				<div className="control">
					<label htmlFor="street">Street:</label>
					<input type="text" name="street" />
				</div>
				<div className="control-row">
					<div className="control">
						<label htmlFor="postal-code">Postal Code:</label>
						<input type="text" name="postal-code" />
					</div>
					<div className="control">
						<label htmlFor="street">City:</label>
						<input type="text" name="city" />
					</div>
				</div>
				<br />
			</form>
		</>
	);
})

export default CheckoutModal;