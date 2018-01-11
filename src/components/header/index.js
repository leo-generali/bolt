import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Bolt 🏃‍</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/about">About</Link>
				</nav>
			</header>
		);
	}
}
