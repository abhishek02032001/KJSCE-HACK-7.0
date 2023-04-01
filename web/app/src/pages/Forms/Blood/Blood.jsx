import React from 'react';

import './Blood.scss';

const Blood = () => {
  return (
    <div className="blood">
      <div className="container">
        <div className="title">Add Blood Reports</div>
        <form className="bloodForm">
          <div className="formRow">
            <label htmlFor="patient">Patient</label>
            <input type="text" placeholder="Patient name..." />
          </div>
          <div className="formRow">
            <label htmlFor="patient">Patient</label>
            <input type="text" placeholder="Patient name..." />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blood;
