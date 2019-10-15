import React from "react";
import "./main.layout.styles.css";
import EvolutionBrand from "../components/evolutionBrand.component";

const MainLayout = props => {
	const toggleSidebar = () => {
		document.querySelector("#sidebar").classList.toggle("active");
		// document.querySelector("#page_content").classList.toggle("active");
	};

	return (
		<div className="wrapper">
			<nav id="sidebar">
				<div className="sidebar-header">
					<EvolutionBrand />
				</div>

				<ul className="list-unstyled components">
					<li className="active">Home</li>
					<li>About</li>
					<li>Oela</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>
			</nav>

			<div id="page_content">
				<nav className="navbar m-0 bg-light">
					<button
						onClick={toggleSidebar}
						className="btn btn-sm btn-outline-info"
					>
						Toggle Side
					</button>
					<div>JOBS</div>
				</nav>
				{props.children}
			</div>
		</div>
	);
};

export default MainLayout;
