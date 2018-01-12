import { h, Component } from 'preact';
import style from './style.scss';

export default class Input extends Component {
	render() {
		return (
			<input 
				type={this.props.type}
				name={this.props.name}
				step={this.props.step}
				value={this.props.value}
				onChange={(e) => this.props.handleChange(e)}
			/>
		);
	}
}
