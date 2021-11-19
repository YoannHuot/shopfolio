import classe from "./Parcours.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaGithub, FaReact } from "react-icons/fa";
import { SiSequelize } from "react-icons/si";
import ProgressBar from "../../../../UI/ProgressBar";

const OpenClassrooms = (props) => {
	return (
		<>
			<p className={classe.container__card__content__date}>
				Octobre 2020 - Octobre 2021 - 1 an - Distanciel
			</p>
			<div className={classe.container__card__content__description}>
				<div className={classe.card__picto}>
					<FaHtml5 className={classe.picto} />
					<ProgressBar percent={80} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<FaCss3Alt className={classe.picto} />
					<ProgressBar percent={60} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<FaJsSquare className={classe.picto} />
					<ProgressBar percent={70} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<FaReact className={classe.picto} />
					<ProgressBar percent={70} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<FaNode className={classe.picto} />
					<ProgressBar percent={60} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<SiSequelize className={classe.picto} />
					<ProgressBar percent={60} showData={props.showData} />
				</div>
				<div className={classe.card__picto}>
					<FaGithub className={classe.picto} />
					<ProgressBar percent={50} showData={props.showData} />
				</div>
			</div>
		</>
	);
};

export default OpenClassrooms;
