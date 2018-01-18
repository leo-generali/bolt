import { h, Component } from 'preact';
import style from './style.scss';

class DistanceListCheckbox extends Component {
  render() {
    return (
      <input
        type="checkbox"
        value={this.props.showingDistanceList}
        onClick={this.props.showDistanceList}
      >
      </input>
    );
  }
}

export default DistanceListCheckbox;