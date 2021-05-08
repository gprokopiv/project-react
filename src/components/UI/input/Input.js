import React from 'react';
import PropTypes from 'prop-types';
import s from './Input.modole.css';

const Input = (props) => {
const { type, name, label, className, ...restProps } = props;
const id = Date.now();
const classList = [className, s.inputWraper].join(' ');

  return (
    <div>
      {label && <label htmlFor={id}> {label} </label>}
      <input className={s.input}
      id={id}
      type={type}
      name={name}
      {...restProps}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  name: null,
  label: '',
  className: '',
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,

};

export default Input;