import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainLayout from "./layout/main.layout";

import Splash from "./pages/splash.page";
import Tutorial from "./pages/tutorial.page";
import Index from "./pages/index.page";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Splash} />
				<Route exact path="/tutorial" component={Tutorial} />

				<MainLayout>
					<Route exact path="/index" component={Index} />
				</MainLayout>
			</Switch>
		</BrowserRouter>
	);
}
