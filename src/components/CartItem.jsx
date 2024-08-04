import { useContext, useState, useEffect } from "react";

import { CartContext } from "../store/cart-context";

export default function CartItem({ id, name, quantity, price }) {
	const { updateItemQuantity } = useContext(CartContext);

	return (
		<li className="cart-item">
			<p>
				{name} - {quantity} x ${price}
			</p>
			<div className="cart-item-actions">
				<button onClick={() => updateItemQuantity(id, -1)}>-</button>
				<p>{quantity}</p>
				<button onClick={() => updateItemQuantity(id, 1)}>+</button>
			</div>
		</li>
	);
}
