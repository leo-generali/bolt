import { h, Component } from 'preact';
import style from './style.scss';

class DistanceOption extends Component {
  render() {
    const name = this.props.name;
    const value = this.props.value;
    const title = this.props.title;

    return(
      <div className={style.container}>
        <a
          className={style.distanceOption}
          onClick={(evt) => this.props.updateState(evt, name, value)}
        >
          {title}
        </a>
      </div>
    );
  }
}

export default DistanceOption;