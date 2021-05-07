import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewList from './RewievList';
import ReviewHeader from './ReviewHeader/';
import mockedReviews from '../../../data/review.json';
import s from './Reviews.module.css';

const totalRating = mockedReviews.reduce(
  (totalRating, review) => totalRating + review.rating, 
  0
);
const averageRating = +( totalRating / mockedReviews.length).toFixed(1);

class Reviews extends Component {
   state = {
     showAll: false, 
     reviewsLimit: 2,
   };

   toggleReviews = () => {
     console.log(1111)
     this.setState((prevState) => ({
       showAll: !prevState.showAll,
     }));
   }

   getCurrentReview = () => {
if (this.state.showAll) {
  return mockedReviews;
}
return mockedReviews.slice(0, this.state.reviewsLimit);
   };

   render() {
return (
  <div className={s.reviews}>
    <ReviewHeader 
     totalRating={averageRating}
     amount={mockedReviews.length}
    />
    < ReviewList reviews={this.getCurrentReview()}/>
    <button onClick={this.toggleReviews} className={s.showMore}>Read more...</button>
  </div>
)
   }
 }
// {
//     return (
//        <>
//        <ReviewList /> 
//           {/* {mokedReviews.map(({id, rating, author, content }) => (
//             <ReviewItem
//             key={id} rating={rating} title={author} description={content}
         
//             />
//           ))} */}
//       </>
//       );

//             };

Reviews.propTypes = {
  reviews: PropTypes.string,
  totalRating: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,

};

export default Reviews;