import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import s from './productList.module.css';

const ProductList = ({items}) => {
    return (
        <div className={s.list}>
            {items.length === 0 ?
            "Sorry, nothing is here"
            : items.map(({id, price, rating, description}) => (
                <ProductCard 
                key={id}
                price={price}
                rating={rating}
                description={description}
                />
            ))}
            
        </div>
    );
};

ProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        imgSrc: PropTypes.string,
    price: PropTypes.string.isRequired,
    rating: PropTypes.strings,
    description: PropTypes.string.isRequired,

    }))
    
};

export default ProductList;