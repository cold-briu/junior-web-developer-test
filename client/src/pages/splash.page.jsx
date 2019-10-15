import React from "react";
import EvolutionBrand from "../components/evolutionBrand.component";
import GithubBadge from "../components/githubBadge.component";
import ContinueButton from "../components/continueButton.component";

const Splash = () => (
	<main className="splash_container text-center flex-col-center-container animated fadeIn faster">
		<EvolutionBrand className="mb-5" />

		<div className="header_container mt-3">
			<h2>Junior-developer-test</h2>
			<small>by: Andrés Fernández</small>
			<GithubBadge />
		</div>
		<ContinueButton to="/tutorial" />
	</main>
);

export default Splash;
