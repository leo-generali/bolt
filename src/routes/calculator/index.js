import { h, Component } from 'preact';
import style from './style.scss';

// Components
import Input from "../../components/input";
import CalcBtn from "../../components/calculate_button";

// Helpers
import { calculatePaceString } from "../../helpers/math";


export default class Calculator extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.calculatePace = this.calculatePace.bind(this);
	}

	state = {
		distance: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
		totalSeconds: 0,
		pace: ''
	}

	calculateTotalSeconds() {
		const hoursToSeconds = this.state.hours * 3600;
		const minutesToSeconds = this.state.minutes * 60;
		const totalSeconds = hoursToSeconds + minutesToSeconds + this.state.seconds;

		return totalSeconds;
	}

	handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: parseFloat(value, 10)
		})
	};

	calculatePace() {
		const totalSeconds = this.calculateTotalSeconds();
		const distancePerSecond = totalSeconds / this.state.distance;
		const distancePerMinutes = this.state.minutes / this.state.distance;
		const pace = calculatePaceString(distancePerMinutes, distancePerSecond);

		this.setState({
			totalSeconds,
			pace
		})
	}

	render() {
		return (
			<div>
				<div className={style.inputContainer}>
					<Input
						type="number"
						name="distance"
						step="0.01"
						value={this.state.distance}
						handleChange={this.handleChange}
					/>
				</div>
				<div className={style.inputContainer}>
					<Input
						type="number"
						name="hours"
						step="1"
						value={this.state.hours}
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
						name="seconds"
						step="0.1"
						value={this.state.seconds}
						handleChange={this.handleChange}
					/>
				</div>
				<div>
					<Input
						type="string"
						name="pace"
						value={this.state.pace}
						handleChange={this.handleChange}
					/>
					<CalcBtn
						label="leo is cool"
						calculatePace={this.calculatePace}
					/>
				</div>
			</div>
		);
	}
}


