import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import classes from "./RatingStar.module.css";

const RatingStar = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	return (
		<div className={classes.container__rating__star}>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<label>
						<input
							type="radio"
							name="rating"
							className={classes.radio__button}
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						></input>
						<FaStar
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
							color={ratingValue <= (hover || rating) ? "red" : "grey"}
							className={classes.rating__star}
						/>
					</label>
				);
			})}
			<div>Moyenne des avis {rating}</div>
		</div>
	);
};

export default RatingStar;
