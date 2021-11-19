import React from "react";
import classe from "./Home.module.css";
import classes from "./ArticleBottom.module.css";

import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

import { GiShoppingCart, GiCandlestickPhone, GiNotebook } from "react-icons/gi";

import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
import naming from "../../assets/naming.png";
import namer from "../../assets/namer.jpg";
import dev from "../../assets/dev.jpg";

import gael from "../../assets/gael.jpg";
import nudie from "../../assets/nudie.png";
import alexis from "../../assets/alexis.png";

import Article from "./Article";
import ArticleBottom from "./ArticleBottom";

import RatingStar from "../../UI/RatingStar";
import Footer from "./Footer";

const Home = () => {
	const images = [naming, banner];
	return (
		<div className={classe.home}>
			<div className={classe.home__promotion}>
				<div className={classe.home__promotion__content}>
					<div>-0% sur votre premier achat</div>
					<div>06 13 63 97 57 </div>
					<div>Yoann.huot@gmail.com</div>
					<div>Lun - Ve : 9h30-18h30</div>
					<div>Frais de port gratuit</div>
				</div>
			</div>
			<div className={classe.header__home}>
				<div className={classe.header__home__logo}>
					<img src={logo}></img>
					<h1>Yoann Huot Shopfolio</h1>
				</div>
				<div className={classe.header__home__content}>
					<div className={classe.header__home__content__picto}>
						<GiShoppingCart fontSize={"1em"} />
						<p>Panier</p>
					</div>
					<div className={classe.header__home__content__picto}>
						<GiNotebook fontSize={"1em"} />
						<p>About</p>
					</div>
					<div className={classe.header__home__content__picto}>
						<GiCandlestickPhone fontSize={"1em"} />
						<p>Contact</p>
					</div>
				</div>
			</div>
			<Carousel
				showIndicators={false}
				showArrows={true}
				showThumbs={false}
				showStatus={false}
				className={classe.carousel}
				autoPlay={true}
				interval="8000"
				// infiniteLoop={true}
			>
				{images.map((image, index) => (
					<img key={index} src={image} />
				))}
			</Carousel>
			<h2 className={classe.slogan}>Vous trouverez forcément un Yoann à votre pied</h2>
			<h3 className={classe.section__title}>Nos classiques</h3>
			<div className={classe.home__article}>
				<section className={classe.home__section__left}>
					<Article
						img={namer}
						className={classe.home__section__left__price}
						title={"Naming"}
						description={"Création de nom pour entreprise - CDNMPE22"}
						price={"1000€HT"}
					/>
					<Article
						img={namer}
						className={classe.home__section__left__price}
						title={"Project Manager"}
						description={"Gestion de projet Branding - GDPB21"}
						price={"Sur devis"}
					/>
				</section>
				<section className={classe.home__section__right}>
					<Article
						img={dev}
						className={classe.home__section__right}
						title={"NEW ARRIVAL"}
						description={"Développeur Web CRUD - DWCR21"}
						price={"Sur devis"}
					/>
				</section>
			</div>
			<h3 className={classe.section__title}>Nos Partenaires</h3>
			<div className={classes.home__article__bottom}>
				<section className={classes.home__article__bottom__left}>
					<article>
						<img src={alexis}></img>
						<p className={classes.article__best__seller__alexis}>BEST SELLER</p>
						<title>Testeur QA</title>
						<footer className={classes.home__article__bottom__left__footer}>
							<p className={classes.home__article__bottom__description}>
								Testeur QA Boss - TQAB21
							</p>
							<p>Sur devis</p>
							<RatingStar />
							<div className={classes.article__bottom__footer__button}>
								<button>Show more</button>
								<button>Add to Card</button>
							</div>
						</footer>
					</article>
				</section>
				<section className={classes.home__article__bottom__right}>
					<ArticleBottom
						img={gael}
						title={"Developpeur Senior"}
						description={"Développeur Full Stack Senior - DFSS21"}
						price={"Sur devis"}
					/>
					<ArticleBottom
						img={nudie}
						title={"Infographiste"}
						description={"Infographiste Full Stack - IFS21"}
						price={"Sur devis"}
					/>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
