import React, { Component } from "react";

export default class TutorialCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iterator: 0,
			cardsInfo: [
				{
					title: "Selecting Managers",
					body: "On left side bar you'll select current manager",
					img:
						"https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
				},
				{
					title: "Choosing Employees",
					body: "On top right container you'll drag any employee",
					img:
						"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQZjAuRdB5Qk%2Fhqdefault.jpg&f=1&nofb=1"
				},
				{
					title: "Creating new job",
					body: "Drag employee and drop on adding zone",
					img: "https://i.ytimg.com/vi/V9AUiBtRPvg/hqdefault.jpg"
				}
			]
		};
	}

	nextCard = e => {
		const { iterator, cardsInfo } = this.state;
		e.preventDefault();
		if (iterator < cardsInfo.length - 1) {
			this.setState({ iterator: iterator + 1 });
		} else {
			this.setState({ iterator: 0 });
			this.props.hideMe();
		}
	};

	render() {
		let { iterator, cardsInfo } = this.state;
		return (
			<div className="card animated slideInUp">
				<div className="view overlay">
					<img
						className="card-img-top"
						src={cardsInfo[iterator].img}
						alt="header pic"
					/>
					<a href="#!">
						<div className="mask rgba-white-slight"></div>
					</a>
				</div>

				<div className="card-body my-5 text-center d-flex flex-column align-items-center">
					<h4 className="card-title">{cardsInfo[iterator].title}</h4>
					<p className="card-text">{cardsInfo[iterator].body}</p>

					<button
						className="btn btn-success mt-5 w-50
                d-flex justify-content-between align-items-center"
						onClick={this.nextCard}
					>
						<i className="material-icons ml-1">navigate_next</i>
					</button>
				</div>
			</div>
		);
	}
}
