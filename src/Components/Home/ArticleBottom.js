import React from "react";
import classes from "./ArticleBottom.module.css";
import RatingStar from "../../UI/RatingStar";

const ArticleBottom = (props) => {
	return (
		<article className={classes.home__section__right}>
			<p className={classes.home__section__right__title}>{props.title}</p>
			<div className={classes.article__bottom__content}>
				<p className={classes.article__best__seller}>BEST SELLER</p>
				<p className={classes.home__article__bottom__description}>{props.description}</p>
				<p>{props.price}</p>
				<button>Add to Card</button>
				<button>Show More</button>
				<RatingStar />
			</div>
			<img src={props.img} className={classes.article__bottom__img}></img>
		</article>
	);
};

export default ArticleBottom;
