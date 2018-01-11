import { h, Component } from 'preact';
import style from './style.scss';

export default class About extends Component {
  render() {
    return (
      <div class={style.about}>
        <h1>About</h1>
        <p>This is the About component.</p>
      </div>
    );
  }
}
