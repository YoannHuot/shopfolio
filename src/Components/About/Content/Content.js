import React from "react";

import Introduction from "./Introduction/Introduction";
import Parcours from "./Parcours/Parcours";
import Experience from "./Experience/Experience";
import classe from "./Content.module.css";

const Content = () => {
	return (
		<div className={classe.test}>
			<Introduction />
			<Parcours />
			<Experience />
		</div>
	);
};

export default Content;
