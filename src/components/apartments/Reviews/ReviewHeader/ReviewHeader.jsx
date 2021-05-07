import PropTypes from 'prop-types';
import Rating from '../../../Rating';
import s from './ReviewHeader.module.css';

const ReviewHeader = ({ totalRating, amount }) => {
return (
  <div className={s.content}>
    <h2 className={s.title}> Total rating</h2>
    <div className={s.rating}>
     <span>{amount} reviews</span>
     <Rating rating ={totalRating}/>
    </div>
  </div>
);

};

ReviewHeader.propTypes = {
  totalRating: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ReviewHeader;
