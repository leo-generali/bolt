import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Calculator from '../routes/calculator';
import About from '../routes/about';

import { toSeconds } from '../helpers/math';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Calculator path="/" />
					<About path="/about" />
				</Router>
			</div>
		);
	}
}
