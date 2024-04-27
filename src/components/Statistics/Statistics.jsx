import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => (
//   <div>
//     <p>Good: {good}</p>
//     <p>Neutral: {neutral}</p>
//     <p>Bad: {bad}</p>
//     <p>Total: {total}</p>
//     <p>Positive Percentage: {positivePercentage}%</p>
//   </div>
// );

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className="statistics">
    <p>
      <span className={css.good}>Good:</span> {good}
    </p>
    <p>
      <span className={css.neutral}>Neutral:</span> {neutral}
    </p>
    <p>
      <span className={css.bad}>Bad:</span> {bad}
    </p>
    <p>
      <span className={css.total}>Total:</span> {total}
    </p>
    <p>Positive Percentage: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
