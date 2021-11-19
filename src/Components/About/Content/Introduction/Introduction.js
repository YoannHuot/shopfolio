import React from "react";
import classe from "./Introduction.module.css";
import photo from "../../../../assets/moi-removebg-preview.png";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Introduction = () => {
	const handleContainer = useMediaQuery({
		query: "(min-width: 1024px)"
	});

	return (
		<div className={classe.container}>
			{handleContainer && <div className={classe.container__left}></div>}

			<div className={classe.container__center}>
				<div className={classe.container__card}>
					<div className={classe.card}>
						<div className={classe.card__photo}>
							<img src={photo} alt="présentation"></img>
						</div>

						<div className={classe.container__center__name}>Yoann Huot</div>
						<div className={classe.container__center__line}></div>
						<div className={classe.container__center__job}>DEVELOPPEUR WEB</div>
					</div>
					<div className={classe.container__center__footer}>
						<FaTwitter className={classe.picto} />
						<FaFacebookF className={classe.picto} />
						<FaInstagram className={classe.picto} />
						<FaLinkedinIn className={classe.picto} />
					</div>
				</div>
				<div className={classe.introduction}>
					<div className={classe.introduction__title}>HELLO</div>
					<div className={classe.introduction__subtitle}>
						Je m'appelle Yoann, et je suis Développeur Web
					</div>
					<div className={classe.introduction__card__button}>
						<button className={classe.introduction__download}>CV</button>
						<button className={classe.introduction__button}>Projets</button>
					</div>
					<div className={classe.introduction__description}>
						Chef de projet de formation, après quelques années dans la communication ,
						je aujourd'hui suis à la recherche d'un premier emploi dans l'univers du
						développement Web. !
					</div>
					<div className={classe.introduction__description}>
						Travailleur et passionné, je me donnerai à 100% dans les missions qui me
						seront confiées
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
