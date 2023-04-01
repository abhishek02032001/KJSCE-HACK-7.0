import React from 'react';
import { useLocation } from 'react-router-dom';

import './Treatment.scss';

const Treatment = () => {
  const location = useLocation();
  const treatmentId = location.pathname.split('/')[4];

  console.log(treatmentId);

  return (
    <div className="treatment">
      <div className="container">
        <div className="title">
          <p>Treatment Information</p>
        </div>

        <div className="details">
          <div className="infoCard">
            <div className="heading">
              <p>Doctor Details</p>
            </div>
            <div className="info">
              <p>
                <span>Name - </span>Dr. John Smith
              </p>
              <p>
                <span>Qualification - </span>MBBS
              </p>
              <p>
                <span>Address - </span>Mumbai, India
              </p>
            </div>
          </div>

          <div className="infoCard">
            <div className="heading">
              <p>Treatment Details</p>
            </div>
            <div className="info">
              <p>
                <span>Treatment - </span>Dr. John Smith
              </p>
              <p>
                <span>Description - </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, totam.
              </p>
              <p>
                <span>Start Date - </span>21/03/2023
              </p>
              <p>
                <span>End Date - </span>21/03/2023
              </p>
            </div>
          </div>
        </div>

        <div className="reportSection">
        <a href = "https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view?usp=share_link" target = "_blank">Download Pdf</a>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
