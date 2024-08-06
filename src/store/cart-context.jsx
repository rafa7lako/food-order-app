import { createContext, useState, useRef } from "react";

export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
	calculateTotal: () => {},

	modalType: undefined,
	setModalType: () => {},
	dialog: undefined,
	goToCheckoutFN: () => {},
	handleCloseCart: () => {},
});

export default function CartContextProvider({ children }) {
	const dialog = useRef();

	const [shoppingCart, setShoppingCart] = useState({
		items: [],
	});

	const [modalType, setModalType] = useState("cart");

	function handleAddItemToCart(id, name, price) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];

			const existingCartItemIndex = updatedItems.findIndex(
				(cartItem) => cartItem.id === id
			);

			if (existingCartItemIndex !== -1) {
				const existingCartItem = updatedItems[existingCartItemIndex];
				const updatedItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems.push({
					id: id,
					name: name,
					price: price,
					quantity: 1,
				});
			}

			return { items: updatedItems };
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		setShoppingCart((prevShoppingCart) => {
			const updatedItems = [...prevShoppingCart.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === productId
			);

			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};

			updatedItem.quantity += amount;

			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
			};
		});
	}

	const calculateTotal = () => {
		return shoppingCart.items
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	};

	function goToCheckoutFN() {
		setModalType("checkout");
	}

	function handleCloseCart() {
		setModalType("cart");
		dialog.current.close();
	}

	const ctxValue = {
		items: shoppingCart.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
		calculateTotal: calculateTotal,
		modalType: modalType,
		setModalType: setModalType,
		dialog: dialog,
		goToCheckoutFN: goToCheckoutFN,
		handleCloseCart: handleCloseCart,
	};

	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
}
