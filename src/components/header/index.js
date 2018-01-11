import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.scss';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1 class={style.headerText}>Bolt 🏃‍</h1>
				<nav class={style.navContainer}>
					<Link class={style.navLink} activeClassName={style.navActive} href="/">Home</Link>
					<Link class={style.navLink} activeClassName={style.navActive} href="/about">About</Link>
				</nav>
			</header>
		);
	}
}
