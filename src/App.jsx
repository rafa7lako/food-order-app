
import MealsSection from "./components/MealsSection.jsx";
import Header from "./components/Header.jsx";



import CartContextProvider from "./store/cart-context.jsx";

function App() {
	

	return (
		<CartContextProvider>
			<Header />
			<main>
				<MealsSection />
			</main>
		</CartContextProvider>
	);
}

export default App;
