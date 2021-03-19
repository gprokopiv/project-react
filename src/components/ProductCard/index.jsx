import React from "react";
import Proptypes from 'prop-types'
import s from './productCard.module.css';
import Rating from '../Rating/'


const ProductCard = ({ imgSrc }) => {
    return <section className={s.card}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum asperiores doloribus, alias omnis similique suscipit pariatur quaerat soluta aut sint magni obcaecati eos veritatis, culpa, ratione deleniti! Perferendis, dolore nam.</p>
    <Rating />
    </section>
}

ProductCard.propTypes =  { imgSrc:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640'}

export default ProductCard;