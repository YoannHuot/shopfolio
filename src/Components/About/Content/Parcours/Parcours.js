import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import classe from "./Parcours.module.css";
import "./Parcours.css";
import illustration from "../../../../assets/9800-removebg-preview.png";
import illustrationWay from "../../../../assets/20943993.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import OpenClassrooms from "./OpenClassrooms";
import Kedge from "./Kedge";
import Prepa from "./Prepa";
import Bac from "./Bac";

const Parcours = () => {
	useEffect(() => {
		AOS.init({ duration: 2500, once: true });
	}, []);

	const handleParagraph = useMediaQuery({
		query: "(min-width: 1550px)"
	});

	const [showData, setShowData] = useState({
		openclassrooms: false,
		kedge: false,
		prepa: false,
		bac: false
	});

	const openclassroomsHandler = () => {
		if (showData.openclassrooms) {
			setShowData({ openclassrooms: false });
			console.log(showData);
		} else {
			setShowData({ openclassrooms: true });
			console.log(showData);
		}
	};

	const kedgeHandler = () => {
		if (showData.kedge) {
			setShowData({ kedge: false });
		} else {
			setShowData({ kedge: true });
		}
	};

	const prepaHandler = () => {
		if (showData.prepa) {
			setShowData({ prepa: false });
		} else {
			setShowData({ prepa: true });
		}
	};
	const bacHandler = () => {
		if (showData.bac) {
			setShowData({ bac: false });
		} else {
			setShowData({ bac: true });
		}
	};

	return (
		<div className={classe.parcours}>
			<div data-aos="fade-right" className={classe.container__left}>
				<img
					src={illustration}
					alt="illustration"
					className={classe.container__left__img}
				></img>

				<div className={classe.container__left__title}>
					<p>Mes formations</p>
				</div>
			</div>

			<div data-aos="fade-left" className={classe.container__center}>
				<div className={classe.container__card} onClick={openclassroomsHandler}>
					<div className={classe.container__card__header}>
						<div className={classe.container__card__background}></div>
						<p>OpenClassrooms - Développeur Web</p>
						<div className={classe.header__picto}></div>
					</div>
					<div
						className={`container__card__content__openclassrooms${
							showData.openclassrooms ? "__show" : ""
						}`}
					>
						<OpenClassrooms showData={showData.openclassrooms} />
					</div>
				</div>

				<div className={classe.container__card} onClick={kedgeHandler}>
					<div className={classe.container__card__header}>
						<div className={classe.container__card__background}></div>
						<p>Kedge Business School </p>
						<div className={classe.header__picto}></div>
					</div>
					<div
						className={`container__card__content__kedge${
							showData.kedge ? "__show" : ""
						}`}
					>
						<Kedge showData={showData.kedge} />
					</div>
				</div>

				<div className={classe.container__card} onClick={prepaHandler}>
					<div className={classe.container__card__header}>
						<div className={classe.container__card__background}></div>
						<p>Classe préparatoire Grandes écoles </p>
						<div className={classe.header__picto}></div>
					</div>
					<div className={`container__card__content${showData.prepa ? "__show" : ""}`}>
						<Prepa showData={showData.prepa} />
					</div>
				</div>
				<div className={classe.container__card} onClick={bacHandler}>
					<div className={classe.container__card__header}>
						<div className={classe.container__card__background}></div>
						<p>Baccalauréat STG - mention Bien</p>
						<div className={classe.header__picto}></div>
					</div>
					<div className={`container__card__content${showData.bac ? "__show" : ""}`}>
						<Bac showData={showData.bac} />
					</div>
				</div>
			</div>
			<div className={classe.container__right}>
				<div className={classe.right__content}>
					{handleParagraph ? (
						<>
							<div className={classe.right__content__title} data-aos="fade-left">
								Du marketing, de la com puis du Dev !
							</div>
							<p data-aos="fade-left" className={classe.right__content__p1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								odio ipsum, convallis vel enim ullamcorper, sodales luctus ipsum.
								Morbi consectetur hendrerit urna, ac sagittis est dapibus vel. In
								vel maximus enim. Integer ac eleifend magna, in scelerisque purus.
								Nunc vel sollicitudin urna. In auctor sodales risus vel tempus. Ut
								et hendrerit lectus.
							</p>
							<p data-aos="fade-left" className={classe.right__content__p2}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								odio ipsum, convallis vel enim ullamcorper, sodales luctus ipsum.
								Morbi consectetur hendrerit urna, ac sagittis est dapibus vel. In
								vel maximus enim. Integer ac eleifend magna, in scelerisque purus.
								Nunc vel sollicitudin urna. In auctor sodales risus vel tempus. Ut
								et hendrerit lectus.
							</p>
						</>
					) : (
						<>
							<div className={classe.right__content__title} data-aos="fade-left">
								Du marketing, de la com puis du Dev !
							</div>
							<p data-aos="fade-left" className={classe.right__content__media}>
								Le petit paragraphie qui ira en bas des items quand l'écran devient
								beaucoup trop petit est ici. Maintenant Lorem odio ipsum, convallis
								vel enim ullamcorper, sodales luctus ipsum.
							</p>
							<p data-aos="fade-left" className={classe.right__content__media}>
								Le petit paragraphie qui ira en bas des items quand l'écran devient
								beaucoup trop petit est ici. Maintenant Lorem odio ipsum, convallis
								vel enim ullamcorper, sodales luctus ipsum.
							</p>
						</>
					)}

					<img src={illustrationWay} data-aos="fade-left"></img>
				</div>
			</div>
		</div>
	);
};

export default Parcours;
