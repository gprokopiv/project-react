import React from 'react';
import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ className, ass: TagName, children }) => {
    const classList = [s.container, className].join(' ');
    
    return <TagName className={classList} > {children} </TagName> 
};

// Container.defaultProps = {
//     as: 'div',
//     className: '',
//     };
// Container.propTypes = {
// as: PropTypes.string,
// className: PropTypes.string,
// }

export default Container;