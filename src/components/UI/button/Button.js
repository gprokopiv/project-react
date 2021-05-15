import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';


const Button = ({ children, className, ...restProps}) => {
  const classList = [className, s.button].join(' ');
  return (
    <button classNmae={classList} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;