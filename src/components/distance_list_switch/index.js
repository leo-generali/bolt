import { h, Component } from 'preact';
import style from './style.scss';

class DistanceListCheckbox extends Component {
  render() {
    return (
      <button
        className={`button ${style.button} ${this.props.showingDistanceList ? ' button--depressed' : ''}`}
        onClick={this.props.showDistanceList}
      >
        <span className={style.text}>Distances</span>
        <div className={style.arrow}>
          {this.props.showingDistanceList ? ' ▼' : ' ►'}
        </div>
      </button>
    );
  }
}

export default DistanceListCheckbox;