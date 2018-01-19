import { h, Component } from 'preact';
import style from './style.scss';

class DistanceListCheckbox extends Component {
  render() {
    return (
      <button
        className={`button ${this.props.showingDistanceList ? ' button--depressed' : ''} ${style.button}`}
        value={this.props.showingDistanceList}
        onClick={this.props.showDistanceList}
      >
      Distances
        <div className={style.arrow}>
          {this.props.showingDistanceList ? ' ▼' : ' ►'}
        </div>
      </button>
    );
  }
}

export default DistanceListCheckbox;