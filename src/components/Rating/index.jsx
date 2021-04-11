import React from 'react';
import PropTypes from 'prop-types';
import s from './rating.module.css';



const Rating =( {rating, limit}) => {
    const coloredRatingWidth = (rating / limit) * 100 + '%';
    let emptyStarList = [];
    let coloredStarList = [];
 for (let i = 0; i < limit; i++) {
    emptyStarList.push(
        <img key={i}
        className={s.star}
        src='./img/emptystar.svg'
        alt='empty' />

    );
    coloredStarList.push(
        <img key={i}
        className={s.star}
        src='./img/coloredStar.svg'
        alt='empty' />
    )
 }
 const EmptyStars = () => emptyStarList;
 const ColoredStars = () => coloredStarList;
    return (
        <div className={s.rating}>
            <div className={s.emptyStars}>
            <EmptyStars/>
            <div className={s.coloredStars}
            style={{ width: coloredRatingWidth }}>
            <ColoredStars/>
            </div>

            </div>
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