import { h, Component } from 'preact';
import style from './style.scss';

class DistanceCheckbox extends Component {
  render() {
    return (
      <input
        type="checkbox"
        value={this.props.isMiles}
        onClick={this.props.changeDistanceType}
      >
      </input>
    );
  }
}

export default DistanceCheckbox;