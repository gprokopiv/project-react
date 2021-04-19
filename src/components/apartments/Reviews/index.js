import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from './RewievList';
import mokedReviews from '../../../data/mokedReview.json'

const Reviews = (props) => {
    return (
       <>
       <ReviewList /> 
          {/* {mokedReviews.map(({id, rating, author, content }) => (
            <ReviewItem
            key={id} rating={rating} title={author} description={content}
         
            />
          ))} */}
      </>
      );

            };

Reviews.propTypes = {
    
};

export default Reviews;