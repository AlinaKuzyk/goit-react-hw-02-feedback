import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  ButtonWrapper,
} from 'components/FeedbackOptions/FeedbackStyled.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map((option, index) => (
        <Button
          type="button"
          key={index}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
