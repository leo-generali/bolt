import { h, Component } from 'preact';
import style from './style.scss';

export default class Input extends Component {
	render() {
		return (
			<input 
				type="number"
				name="distance"
				step="0.01"
				value={this.props.distance}
				onChange={(e) => this.props.handleChange(e)}
			/>
		);
	}
}
