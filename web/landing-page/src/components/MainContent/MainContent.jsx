import React from 'react';

import './MainContent.scss';
import { LoginForm } from '..';

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="container">
        <div className="left">
          <div className="mainCard">
            <h1>Connection. Consultation. Care</h1>
            <p>
              SwaMi is one of the leading applications of specialized online
              medical communities for consultation, communication, and
              information exchange between licensed health care professionals
              within a private and secure platform.
            </p>
          </div>

          <div className="featuresSection">
            <h2>Features</h2>

            <div className="features">
              <div className="feature">
                <p>Online Diagnosis</p>
              </div>
              <div className="feature">
                <p>Online Prescriptions</p>
              </div>
              <div className="feature">
                <p>Chat with Doctors</p>
              </div>
            </div>

            <div className="features">
              <div className="feature">
                <p>Automated Reports</p>
              </div>
              <div className="feature">
                <p>Get Help from NGOs</p>
              </div>
              <div className="feature">
                <p>And much more...</p>
              </div>
            </div>
          </div>

          <div className="moreInfo">
            <h2>Learn more about our app</h2>
            <p>
              SwaMi aims to proudly serve the diverse needs of local people as
              well as the unique healthcare professionals by enabling
              communication and consultation across a variety of medical
              specialities like hospitals, healthcare specialists and NGOs.
            </p>
          </div>
        </div>
        <div className="right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
