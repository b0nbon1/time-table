import React from 'react';
import PropTypes from 'prop-types';

const LessonCard = ({ data: { icon, lesson, teacher, classCode, time } }) => (
  <div className='lessonC'>
    <div className='lessonC-icon'>
      <i className={icon} />
    </div>
    <div className='lessonC-details'>
      <h3>{lesson}</h3>
      <h5>{teacher}</h5>
      <h6>{time}</h6>
    </div>
    <h6 className='lessonC-class'>{classCode}</h6>
  </div>
);

LessonCard.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    lesson: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    classCode: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default LessonCard;
