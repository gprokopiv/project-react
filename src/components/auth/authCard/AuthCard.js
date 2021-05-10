import React from 'react';
import PropTypes from 'prop-types';
import s from './AuthCard.module.css';

const AuthCard = ({ children }) => {
  return (
    <div className={s.card}>
      {children}
    </div>
  );
};

AuthCard.propTypes = {
  
};

export default AuthCard;