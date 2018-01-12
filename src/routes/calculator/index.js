import { h, Component } from 'preact';
import style from './style.scss';
import Input from "../../components/input";


export default class Calculator extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	state = {
		distance: 0
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
					distance={this.state.distance}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}


