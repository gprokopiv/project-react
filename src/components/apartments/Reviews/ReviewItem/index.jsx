import React from 'react';
import PropTypes from 'prop-types';
import s from './ReviewItem.module.css';
import Rating from '../../../Rating';
import ReviewAvatar from './ReviewAvatar';

const ReviewItem = ({title, rating, description= '' }) => {
    return (
    <div className={s.review}>
        <div className={s.header}>
            <ReviewAvatar />
            <div className={s.details}>
                 <h2 className={s.title}>{title}</h2>
            <Rating rating={rating} />
            </div>
           
        </div>
        <p className={s.description}>{description}</p>
     </div>
    );
};

ReviewItem.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string,


};

export default ReviewItem;