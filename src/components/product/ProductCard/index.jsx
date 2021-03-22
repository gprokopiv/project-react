import React from "react";
import PropTypes from 'prop-types'
import s from './productCard.module.css';
import Rating from '../../Rating';
import Price from './ProductPrice';



const ProductCard = ({ imgSrc, price, rating, description }) => {
    const highRating = rating>=4;
    return <section className={s.card}>
        <div className={s.cardInner}> 
        <img className={s.photo} src={imgSrc} alt='img' />
       <div className={s.content}>
           {highRating && "Top sales"}
       <p>{description}</p>
    <Rating rating={4}/>
    <Price value={1000} />
       </div>
        </div>
    </section>
}
ProductCard.propTypes =  {
    imgSrc: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number,

}

ProductCard.defaultProps =  { 
    
    imgSrc:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum asperiores doloribus, alias omnis similique suscipit pariatur quaerat soluta aut sint magni obcaecati eos veritatis, culpa, ratione deleniti! Perferendis, dolore nam.',
}

export default ProductCard;