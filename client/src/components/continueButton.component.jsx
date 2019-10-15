import React from "react";
import { Link } from "react-router-dom";

const ContinueButton = props => (
	<Link
		to={props.to}
		className="btn btn-success mt-5
             flex-row-betwen-container 
             animated bounceIn delay-1s"
	>
		Continue
		<i className="material-icons ml-2">navigate_next</i>
	</Link>
);

export default ContinueButton;
