import React from 'react';
import s from './Widget.module.css';
class Widget extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = option => {
    this.setState(prevStat => ({
      [option]: prevStat[option] + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>It's my life</h1>
        <div className={s.container}>
          <p className={s.title}>Please leave feedback</p>
          <div className={s.bottons}>
            <button onClick={() => this.handleIncrement('good')} type="button">
              Good
            </button>
            <button onClick={() => this.handleIncrement('neutral')} type="button">
              Neutral
            </button>
            <button onClick={() => this.handleIncrement('bad')} type="button">
              Bad
            </button>
          </div>
          <p className={s.title}>Statistics</p>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </>
    );
  }
}
export default Widget;
