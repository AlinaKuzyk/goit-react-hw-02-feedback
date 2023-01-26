import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      console.log(option);
      return { [option]: prevState[option] + 1 };
    });
  };

  //    onLeaveFeedback = (option) => {
  //     this.setState(prevState => {
  //       return { [option]: prevState[option] + 1 };
  //     })
  //   };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
      //   style={{
      //     height: '100vh',
      //      display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      >
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h2>Statistics</h2>
        <Statistics />
      </div>
    );
  }
}

export default App;
