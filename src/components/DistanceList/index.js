import { h, Component } from 'preact';
import style from './style.scss';

// Components
import DistanceAnchor from '../DistanceAnchor';

class DistanceList extends Component {

  state = {
    distances: [
      {
        title: "1500m",
        value: 0.9320568
      },
      {
        title: "Mile",
        value: 1
      },
      {
        title: "3k",
        value: 1.86
      },
      {
        title: "2 miler",
        value: 2
      },
      {
        title: "5k",
        value: 3.1
      },
      {
        title: "6k",
        value: 3.73
      },
      {
        title: "8k",
        value: 4.97
      },
      {
        title: "5 miler",
        value: 5
      },
      {
        title: "10k",
        value: 6.2
      },
      {
        title: "15k",
        value: 9.3
      },
      {
        title: "10 miler",
        value: 10
      },
      {
        title: "Half Marathon",
        value: 13.1
      },
      {
        title: "Marathon",
        value: 26.2
      }
    ]
  }

  render() {
    const distances = this.state.distances.map((distance, i) => (
      <DistanceAnchor
        name='distance'
        value={distance.value}
        title={distance.title}
        key={i}
        updateState={this.props.updateState}
      />
    ));

    return (
      <div
        className={`${style.distanceList} ${ this.props.showingDistanceList ? style.showing : style['not-showing'] } has-shadow`}
      >
        { distances }
      </div>
    );
  }
}

export default DistanceList;