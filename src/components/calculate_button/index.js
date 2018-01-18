import { h, Component } from 'preact';
import style from './style.scss';

export default class CalcButton extends Component {
  render() {
    return(
      <button
        className='button'
        type='button'
        onClick={this.props.calculateFunction}
      >
      {this.props.label}
      </button>
    );
  }
}