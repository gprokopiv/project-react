import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.module.css'

const Rating =( {rating, limit}) => {
    return (
        <div className={s.rating}>
            Rating is {rating} of {limit}
        </div>
    );
};

Rating.defaultProps = {
    limit: 5,
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    limit: PropTypes.number,
}

export default Rating;