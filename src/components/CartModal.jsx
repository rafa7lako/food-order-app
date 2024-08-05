import { useContext } from "react";

import { CartContext } from "../store/cart-context";

import CartItem from "./CartItem.jsx";
import CartButtons from "./CartButtons";

export default function CartModal() {
	const { items, calculateTotal } = useContext(CartContext);

	// const calculateTotal = () => {
	// 	return items
	// 		.reduce((total, item) => total + item.price * item.quantity, 0)
	// 		.toFixed(2);
	// };



	return (
		<>
			<h2>Your Cart</h2>
			<ul className="cart">
				{items.map((item) => (
					<CartItem
						key={item.id}
						id={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
					/>
				))}
			</ul>

			<p className="cart-total">${calculateTotal()}</p>
			<CartButtons />
		</>
	);
}
