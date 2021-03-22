import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem/';
import mokedReviews from '../../../data/mokedReview.json'

const Reviews = (props) => {
    return (
       <>
          {mokedReviews.map(mokedReview => (
            <ReviewItem
            key={mokedReview.id} rating={mokedReview.rating} title={mokedReview.author} description={mokedReview.content}
         
            />
          ))}
      </>
      );

            };

Reviews.propTypes = {
    
};

export default Reviews;