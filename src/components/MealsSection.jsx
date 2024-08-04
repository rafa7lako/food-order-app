import Card from "./Card.jsx";

import { useState, useEffect } from "react";

export default function MealsSection() {
	const [fetchedMealsData, setFetchedMealsData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const [addItemToCart, setAddItemToCart] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			setIsLoading(true);

			try {
				const response = await fetch("http://localhost:3000/meals");
				const resData = await response.json();

				if (!response.ok) {
					throw new Error("Failed to fetch meals.");
				}

				setFetchedMealsData(resData);
			} catch (error) {
				setError(error);
			}

			setIsLoading(false);
		}
		fetchMeals();
	}, []);


	return (
		<>
			{isLoading ? <h3 className="fetching-text">Fetching meals...</h3> : null}
			<ul id="meals">
				{fetchedMealsData.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						name={card.name}
						price={card.price}
						description={card.description}
						image={card.image}
						addToCartFn={setAddItemToCart}
					/>
				))}
			</ul>
		</>
	);
}
