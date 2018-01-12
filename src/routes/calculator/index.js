import { h, Component } from 'preact';
import style from './style.scss';
import Input from "../../components/input";


export default class Calculator extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	state = {
		distance: 0,
		seconds: 0,
		minutes: 0,
		hours: 0
	}

	handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: parseFloat(value, 10)
		})
	};
	
	render() {
		return (
			<div>
				<Input
					type="number"
					name="distance"
					step="0.01"
					value={this.state.distance}
					handleChange={this.handleChange}
				/>
				<Input
					type="number"
					name="seconds"
					step="0.1"
					value={this.state.seconds}
					handleChange={this.handleChange}
				/>
				<Input
					type="number"
					name="minutes"
					step="1"
					value={this.state.minutes}
					handleChange={this.handleChange}
				/>
				<Input
					type="number"
					name="hours"
					step="1"
					value={this.state.hours}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}


