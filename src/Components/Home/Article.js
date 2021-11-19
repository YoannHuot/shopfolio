import React, { useEffect, useState } from "react";
import classe from "./Home.module.css";
import { FaRegStar } from "react-icons/fa";
import RatingStar from "../../UI/RatingStar";

const Article = (props) => {
	const [isDev, setIsDev] = useState(false);

	useEffect(() => {
		if (props.title === "NEW ARRIVAL") {
			setIsDev(true);
		}
	}, []);

	return (
		<article>
			<p>{props.title}</p>
			<img src={props.img}></img>
			{!isDev && <div className={classe.home__section__left__price}>STOCK</div>}
			<footer>
				<div className={classe.article__footer__content}>
					<div className={classe.article__footer__description}>{props.description}</div>
					<div className={classe.article__footer__price}>{props.price}</div>
					<RatingStar />
				</div>

				<div className={classe.article__footer__button}>
					<button>Show more</button>
					<button>Add to Card</button>
				</div>
			</footer>
		</article>
	);
};

export default Article;
