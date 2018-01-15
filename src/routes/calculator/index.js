import { h, Component } from 'preact';
import style from './style.scss';

// Components
import Input from "../../components/input";
import CalcBtn from "../../components/calculate_button";
import DistanceCheckbox from "../../components/distance_type";

// Helpers
import { calculatePaceString, paceStringToSeconds, calculateTotalSeconds } from "../../helpers/math";


export default class Calculator extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.calculatePace = this.calculatePace.bind(this);
		this.changeDistanceType = this.changeDistanceType.bind(this);
		this.calculateDistance = this.calculateDistance.bind(this);
	}

	state = {
		distance: 5,
		isMiles: true,
		hours: 0,
		minutes: 30,
		seconds: 0,
		totalSeconds: 0,
		pace: '00:00'
	}

	handleChange(e) {
		const value = typeof e.target.value === 'string' ? e.target.value : parseFloat(e.target.value, 10);
		const name = e.target.name;

		this.setState({
			[name]: value
		});
	};

	// updateTotalSeconds() {
		
	// 	this.setState({
	// 		totalSeconds
	// 	})
	// }

	changeDistanceType() {
		const isMiles = !this.state.isMiles;

		this.setState({
			isMiles
		});
	}

	calculateDistance() {
		const totalSeconds = calculateTotalSeconds(this.state.hours, this.state.minutes, this.state.seconds);
		const secondsPerDistance = paceStringToSeconds(this.state.pace);
		const distance = totalSeconds/secondsPerDistance;

		this.setState({
			totalSeconds,
			distance
		});
	}

	calculatePace() {
		const totalSeconds = calculateTotalSeconds(this.state.hours, this.state.minutes, this.state.seconds);
		const distancePerSecond = totalSeconds / this.state.distance;
		const distancePerMinutes = this.state.minutes / this.state.distance;
		const pace = calculatePaceString(distancePerMinutes, distancePerSecond);

		this.setState({
			totalSeconds,
			pace
		});
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
					<DistanceCheckbox
						isMiles={this.state.isMiles}
						changeDistanceType={this.changeDistanceType}
					/>
					{this.state.isMiles ? 'miles' : 'kilometers'}
					<CalcBtn
						label="Calculate Distance"
						calculateFunction={this.calculateDistance}
					/>
				</div>
				<div className={style.inputContainer}>
					<form>
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
					</form>
				</div>
				<div>
					<Input
						type="string"
						name="pace"
						value={this.state.pace}
						handleChange={this.handleChange}
					/>
					<CalcBtn
						label="Calculate Pace"
						calculateFunction={this.calculatePace}
					/>
				</div>
			</div>
		);
	}
}


