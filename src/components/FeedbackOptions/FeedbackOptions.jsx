import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map((name, i) => (
        <button
          key={i + 1}
          className={css.button}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
