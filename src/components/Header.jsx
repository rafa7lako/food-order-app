import { useRef, useState, useEffect, useContext } from "react";
import logoImg from "../assets/logo.jpg";

import CartModal from "./CartModal.jsx";
import CheckoutModal from "./CheckoutModal.jsx";
import Modal from "./Modal.jsx";

export default function Header() {
	const dialog = useRef();

	const [modalType, setModalType] = useState("cart");

	function handleOpenCart() {
		setModalType("cart");
		dialog.current.showModal();
	}

	function goToCheckoutFN() {
		setModalType("checkout");
	}

	useEffect(() => {
		const handleModalClose = () => {
			setModalType("cart");
		};

		const dialogNode = dialog.current;
		if (dialogNode) {
			dialogNode.addEventListener("close", handleModalClose);
			return () => {
				dialogNode.removeEventListener("close", handleModalClose);
			};
		}
	}, [setModalType]);

	console.log(modalType);
	return (
		<>
			<Modal
				ref={dialog}
				buttonText={modalType === "cart" ? "Go to checkout" : "Submit order"}
				toCheckoutBtn={goToCheckoutFN}
				modalType={modalType}
			>
				{modalType === "cart" ? <CartModal /> : <CheckoutModal />}
			</Modal>

			<header id="main-header">
				<h1 id="title">
					<img src={logoImg} alt="" />
					reactfood
				</h1>
				<button className="text-button" onClick={handleOpenCart}>
					Cart
				</button>
			</header>
		</>
	);
}
