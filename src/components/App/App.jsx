import { Component } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    let valuesArr = Object.values(this.state);
    const summFeedbacks = valuesArr.reduce((acc, value) => acc + value, 0);
    return summFeedbacks;
  }

  countPositiveFeedbackPercentage() {
    const summFeedbacks = this.countTotalFeedback();
    const goodFeedbacksAmount = this.state.good;
    return Math.round((goodFeedbacksAmount * 100) / summFeedbacks);
  }

  handleIncrement = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // makes an array of keys from State
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
