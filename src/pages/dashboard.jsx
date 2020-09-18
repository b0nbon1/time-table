import React from 'react';
import DashboardHead from '../components/dashboard/dashboard-head';
import Timetable from '../components/dashboard/timetable';

const Dashboard = () => {
  return (
    <div className='dashboard-page'>
      <DashboardHead />
      <Timetable />
    </div>
  );
};

export default Dashboard;
