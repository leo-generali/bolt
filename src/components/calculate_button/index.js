import { h, Component } from 'preact';
import style from './style.scss';

export default class CalcButton extends Component {
  render() {
    return(
      <button
        type="button"
        onClick={this.props.calculatePace}
      >
      {this.props.label}
      </button>
    );
  }
}