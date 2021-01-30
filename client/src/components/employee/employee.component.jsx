import React from 'react';

import './employee.styles.scss';

const Employee = ({ props }) => {
  console.log(props);

  return (
    <div className="employee">
      <div className="employee-header">
        <div
          className="image"
          style={{
            backgroundImage: `url(./images/${props.image})`,
          }}
        ></div>
        <div className="employee-title">
          <div className="employee-name">{props.name}</div>
          <div className="employee-position">werknemer</div>
        </div>
      </div>
      <div className="employee-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Employee;
