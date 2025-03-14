import { useContext, forwardRef } from "react";

import { CartContext } from "../store/cart-context";
import CartButtons from "./CartButtons";

const CheckoutModal = forwardRef(function CheckoutModal({}, ref) {
	const { items, calculateTotal } = useContext(CartContext);

	const totalCost = calculateTotal();

	async function sendUserOrder(order) {
		const response = await fetch("http://localhost:3000/orders", {
			method: "POST",
			body: JSON.stringify({ order }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const resData = await response.json();

		if (!response.ok) {
			throw new Error("Failed to update user data.");
		}

		return resData.message;
	}

	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		const acquisitionChannel = fd.getAll("acquisition");
		const customer = Object.fromEntries(fd.entries());
		customer.acquisition = acquisitionChannel;

		// if(data.password !== data['confirm-password']){
		// 	setPasswordsAreNotEqual(true)
		// 	return;
		// }

		const data = {};

		data.customer = customer;
		data.items = items;
		data.items.totalCost = totalCost;

		console.log(data);
		sendUserOrder(data)
		console.log("Data submitted!");

		event.target.reset();
	}

	return (
		<>
			<h2>Checkout</h2>
			<p>Total Amount: ${totalCost}</p>
			<form onSubmit={handleSubmit}>
				<div className="control">
					<label htmlFor="name">Full name:</label>
					<input type="text" name="name" required />
				</div>
				<div className="control">
					<label htmlFor="email">E-Mail Address:</label>
					<input type="email" name="email" required/>
				</div>
				<div className="control">
					<label htmlFor="street">Street:</label>
					<input type="text" name="street" required/>
				</div>
				<div className="control-row">
					<div className="control">
						<label htmlFor="postal-code">Postal Code:</label>
						<input type="number" name="postal-code" required/>
					</div>
					<div className="control">
						<label htmlFor="street">City:</label>
						<input type="text" name="city" required/>
					</div>
				</div>
				<br />
				<CartButtons />
			</form>
		</>
	);
});

export default CheckoutModal;
