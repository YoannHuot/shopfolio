import React from "react";
import classe from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<div className={classe.header__name}>
				<div className={classe.header__picto}></div>
				<div className={classe.header__content}>
					<p className={classe.header__content__name}>Yoann Huot / </p>
					<p className={classe.header__content__job}>DEVELOPPEUR WEB</p>
				</div>
			</div>
			<div className={classe.header__link}>
				<p>Mes formations</p>
				<p>Mes expériences</p>
				<p>Contact</p>
			</div>
		</header>
	);
};

export default Header;
