import React from "react";
import TutorialCard from "../components/tutorialCard.component";
import ContinueButton from "../components/continueButton.component";

const Tutorial = () => {
	const handleTutorial = () => {
		document.querySelector("#tutorial_overlay").classList.toggle("hideThis");
	};

	return (
		<main
			className="splash_container text-center 
            flex-col-center-container animated fadeInRight faster"
		>
			<div className="header_container mt-3">
				<h1>
					¿Want to see <br /> a quick tutorial?
				</h1>
				<button
					className="btn btn-primary mb-5 animated tada"
					onClick={handleTutorial}
				>
					See tutorial
				</button>
			</div>

			<small>
				This front end client was made using:
				<ul className="text-left text-dark mt-2 pl-4">
					<li>
						React Js
						<span role="img" aria-label="emoji">
							👾
						</span>
					</li>
					<li>
						Styled Components
						<span role="img" aria-label="emoji">
							💅
						</span>
					</li>
					<li>
						Bootstrap Material Design
						<span role="img" aria-label="emoji">
							💎
						</span>
					</li>
					<li>
						React Github Btn
						<span role="img" aria-label="emoji">
							🐱
						</span>
					</li>
				</ul>
			</small>

			<div className="link_container mt-3">
				<small>... Or you can just go along</small>
				<ContinueButton to="/index" />
			</div>

			<div
				id="tutorial_overlay"
				className="d-flex align-items-center p-5 dark_overlay animated zoomIn faster hideThis"
			>
				<TutorialCard hideMe={handleTutorial} />
			</div>
		</main>
	);
};
export default Tutorial;
