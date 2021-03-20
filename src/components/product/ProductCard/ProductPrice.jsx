import React, { memo } from 'react'; 
import PropTypes from 'prop-types';

const ProductPrice = ({currency, value}) => {
    return (
        <div>
            {currency} {value}
        </div>
    );
};

ProductPrice.defaultProps = {
    currency: 'UAN',
}

ProductPrice.propTypes = {
    currency: PropTypes.string,
    value: PropTypes.number.isRequired,
}
export default ProductPrice;