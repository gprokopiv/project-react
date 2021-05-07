import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem/index';

const ReviewList = ({ reviews = []}) => {
return reviews.length > 0 
? 
  reviews.map(({id, rating, author, content }) => (
    <ReviewItem
    key={id} rating={rating} title={author} description={content}
 
    />
  )
  )
: 'No reviews';


};

ReviewList.propTypes = {
reviews: PropTypes.arrayOf(
  PropTypes.shape({
id:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
content: PropTypes.string,
author: PropTypes.string,
rating: PropTypes.string,


  })
),

};

export default ReviewList;