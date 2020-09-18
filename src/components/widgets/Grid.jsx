import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/components/widgets/grid.scss';

const Grid = ({ children, classNames }) => {
  return <div className={`grid ${classNames}`}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classNames: PropTypes.string,
};

Grid.defaultProps = {
  classNames: '',
};

export default Grid;
