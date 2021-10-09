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

  countTotalFeedbacks = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = totalFeedbacks =>
    Math.round((this.state.good / totalFeedbacks) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
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
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedbacks()}</p>
          <p>
            Positive feedbacks: {this.countPositiveFeedbackPercentage(this.countTotalFeedbacks())} %
          </p>
        </div>
      </>
    );
  }
}
export default Widget;
