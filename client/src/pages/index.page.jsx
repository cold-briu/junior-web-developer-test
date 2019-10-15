import React, { Component } from "react";
import styled from "styled-components";
import employeeService from "../services/employee.service";

const IndexPageSection = styled.div`
	display: block;
	box-sizing: border-box;

	min-width: 10rem;
	width: 100%;

	min-height: 10rem;
	height: 20vh;
	border-radius: 1rem;
	margin: 0.5rem 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const IndexContainer = styled.main`
	overflow-y: none;
	max-height: 100%;
`;

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let employeesList = this.getEmployees();
		console.log(employeesList);
	}
	async getEmployees() {
		let data = await employeeService.getAll();
		return data;
	}
	state = {};
	render() {
		return (
			<IndexContainer className="index_container container-fluid text-center animated fadeInRight faster">
				<section className="row">
					<article className="col col-11 col-md-9 p-0">
						<IndexPageSection className="bg-warning">
							<span>
								<h1>Acá Empleados</h1>
							</span>
						</IndexPageSection>
					</article>
				</section>

				<section className="row">
					<article className="col col-11 col-md-9 p-0">
						<IndexPageSection className="bg-info">
							<h1>Acá drop</h1>
						</IndexPageSection>
					</article>
				</section>

				<section className="row">
					<article className="col col-11 col-md-9 p-0">
						<IndexPageSection className="bg-danger">
							<h1>Acá busy</h1>
						</IndexPageSection>
					</article>
				</section>
			</IndexContainer>
		);
	}
}
