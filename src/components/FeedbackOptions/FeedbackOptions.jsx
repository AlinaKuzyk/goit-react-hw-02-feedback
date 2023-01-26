import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  <div>
    {options.map((option, index) => {
      // console.log(option);
      return (
        <button
          type="button"
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    })}
  </div>;
};
export default FeedbackOptions;
