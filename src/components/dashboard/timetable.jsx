import React from 'react';
import LessonCard from './lesson-card';

const Timetable = () => (
  <div className='dashtime'>
    <div className='dashtime-head'>
      <div className='dashtime-head_title'>
        <h5>TimeTable</h5>
        <h6>Saturday, 26 July 2020</h6>
      </div>
      <button type='button' className='dashtime-head_select'>
        <span>26-09-2020</span>
        <i className='far fa-calendar-alt' />
      </button>
    </div>
    <div className='dashtime-timetable'>
      <div className='dashtime-timetable_slots'>
        <h6>Slot 1</h6>
        <h6>Slot 2</h6>
        <h6>Slot 3</h6>
        <h6>Slot 4</h6>
        <h6>Slot 5</h6>
        <h6>Slot 6</h6>
      </div>
      <div className='dashtime-timetable_column bg-stripes'>
        <div className='grid'>
          <LessonCard
            data={{
              icon: 'fab fa-react',
              teacher: 'bon',
              time: '1.00 - 2.00',
              lesson: 'React javascript',
              classCode: '45',
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Timetable;
