import { Component } from 'react';

import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Feedback from '../Feedback/Feedback';
import './App.module.scss';
// import '../../styles/reset.scss';

// function App() {
//   return (
//     <div className="app">
//       <Feedback />
//     </div>
//   );
// }

class App extends Component {
  state = {
    good: 10,
    neutral: 20,
    bad: 30,
  };

  countTotalFeedback() {
    // console.log('countTotalFeedback', this.state);
    let valuesArr = Object.values(this.state);
    console.log('valuesArr', valuesArr);
    this.optionsArr();
    const summ = valuesArr.reduce((acc, value) => acc + value, 0);
    // console.log('summ', summ);
    return summ;
  }

  countPositiveFeedbackPercentage() {
    const summ = this.countTotalFeedback();
    const goodAmount = this.state.good;
    // console.log(
    //   'countPositiveFeedbackPercentage',
    //   Math.round((goodAmount * 100) / summ),
    // );
    return Math.round((goodAmount * 100) / summ);
  }

  optionsArr() {
    const arr = Object.keys(this.state);
    console.log('keysArr', arr);
    return arr;
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.optionsArr()}
            onLeaveFeedback={'qwe'}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
