import React from 'react';
import { Statistics } from './components/Widget/Statistics';
class App extends React.Component {
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
    const { handleIncrement, countTotalFeedbacks, countPositiveFeedbackPercentage } = this;
    return (
      <>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          handleIncrement={handleIncrement}
          countTotalFeedbacks={countTotalFeedbacks}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
export default App;
