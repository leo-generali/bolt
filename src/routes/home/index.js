import { h, Component } from 'preact';
import style from './style.scss';

export default class Home extends Component {
	state = {
		test: 'hello'
	}

	render() {
		return (
			<div class={style.home}>
				<h1>{this.state.test}</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}
