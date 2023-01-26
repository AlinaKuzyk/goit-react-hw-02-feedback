import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsList } from 'components/Statistics/StatisticsStyled.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv feedback: {positivePercentage}%</li>
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
