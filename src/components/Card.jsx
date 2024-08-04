import { useContext } from "react";

import { CartContext } from "../store/cart-context";

export default function Card({ id, name, price, description, image, addToCartFn }) {

	const { addItemToCart } = useContext(CartContext)

	// const handleAddToCart = () => {
	// 	addToCartFn({ name, price });
	// };

	return (
		<li className="meal-item">
			<article>
				<div>
					<img src={`http://localhost:3000/${image}`} alt={name} />
					<h3>{name}</h3>
					<h3 className="meal-item-price">${price}</h3>
					<p className="meal-item-description">{description}</p>
					<button
						className="button meal-item-actions"
						onClick={()=>{addItemToCart(id, name, price)}}
					>
						Add to cart
					</button>
				</div>
			</article>
		</li>
	);
}
