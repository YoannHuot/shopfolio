import React from "react";
import classe from "./Footer.module.css";
import logo from "../../assets/logo.png";

const Footer = () => {
	return (
		<footer className={classe.home__footer}>
			<div className={classe.container__title}>
				<img src={logo} alt="logo"></img>
				<h2>Yoann Huot </h2>
				<h3>Aka Epitumia, enchanteur dans les jeux comme dans la vie.</h3>
			</div>
			<div className={classe.container__explore}>
				<h2>Explore</h2>
				<ul>
					<li>About</li>
					<li>Naming</li>
					<li>Chef de projet</li>
					<li>Développeur Web</li>
					<li>Développeur Senior</li>
					<li>Infographiste</li>
					<li>Testing</li>
				</ul>
			</div>
			<div className={classe.container__adress}>
				<h2>Visitez nous</h2>
				<ul>
					<li>Lyon 69006</li>
					<li>67 rue Bellecombe</li>
					<li>France</li>
				</ul>
			</div>
			<div className={classe.container__contact}>
				<h2>New Business</h2>
				<ul>
					<li>Yoann.huot@gmail.com</li>
					<li>06.13.63.97.57</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
