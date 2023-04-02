import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Treatment.scss';
import { treatmentData } from '../../../constants';
import { baseUrl } from '../../config';

const Treatment = () => {
  const location = useLocation();
  const treatmentId = location.pathname.split('/')[4];
  const patientId = location.pathname.split('/')[2];

  const [reportsData, setReportsData] = useState();

  useEffect(() => {
    const fetchReport = async () => {
      const { data } = await axios.get(`${baseUrl}/reports/${treatmentId}`);
      console.log(data);
      // console.log(`${baseUrl}/reports/${treatmentId}`);
      setReportsData(reportsData)
    };

    fetchReport();
  }, []);

  return (
    <div className="treatment">
      <div className="container">
        <div className="title">
          <p>Case Information</p>
        </div>

        <div className="details">
          <div className="infoCard">
            <div className="heading">
              <p>Treatment Details</p>
            </div>
            <div className="info">
              <p>
                <span>Treatment - </span>
                {/* {reportsData.} */}
              </p>
              <p>
                <span>Purpose - </span>
                {treatmentData[0].description}
              </p>
              <p>
                <span>Type - </span>
                {treatmentData[0].start_date}
              </p>
              {/* <p>
                <span>Report date - </span>
                {treatmentData[0].close_date}
              </p> */}
            </div>
          </div>

          {/* <div className="infoCard">
            <div className="heading">
              <p>Doctor Details</p>
            </div>
            <div className="info">
              <p>
                <span>Name - </span>
                {treatmentData[0].doc_name}
              </p>
              <p>
                <span>Qualification - </span>MBBS
              </p>
              <p>
                <span>Address - </span>Mumbai, India
              </p>
            </div>
          </div> */}
        </div>

        <div className="reportSection">
          <div className="infoCard">
            <div className="heading">Patient Reports</div>
            {/* <div className="reports">
              <div className="report">
                <p>Blood</p>
                <p>Taken on - 21/03/2023</p>
                <a
                  href="http://192.168.137.1:8000/static/docs/R-f59d8a0c-8a97-4820-b1fb-9b1d58e5b428.pdf"
                  target="_blank"
                  className="pdf"
                >
                  View Pdf
                </a>
              </div>
              <div className="report">
                <p>CT - Scan</p>
                <p>Taken on - 21/03/2023</p>
                <a
                  href={treatmentData[0].blood_report}
                  target="_blank"
                  className="pdf"
                >
                  View Pdf
                </a>
              </div>
              <div className="report">
                <p>MRI</p>
                <p>Taken on - 21/03/2023</p>
                <a
                  href={treatmentData[0].blood_report}
                  target="_blank"
                  className="pdf"
                >
                  View Pdf
                </a>
              </div>
              <div className="report">
                <p>Sonography</p>
                <p>Taken on - 21/03/2023</p>
                <a href={treatmentData[0].blood_report} className="pdf">
                  View Pdf
                </a>
              </div>
              <div className="report">
                <p>X - Ray</p>
                <p>Taken on - 21/03/2023</p>
                <a href={treatmentData[0].blood_report} className="pdf">
                  View Pdf
                </a>
              </div>
            </div> */}

            <div className="reports">
              <div className="report">
                <p className="title">PDF Report</p>
                <p className="subtitle">Uploaded on</p>
                <p className="time">2023-04-02T08:07:09"</p>
                <a
                  href="http://192.168.137.1:8000/static/docs/R-f59d8a0c-8a97-4820-b1fb-9b1d58e5b428.pdf"
                  target="_blank"
                  className="pdfReport"
                >
                  <button className="viewButton">View Pdf</button>
                </a>
              </div>
              <div className="report">
                <p className="title">Video Report</p>
                <p className="subtitle">Uploaded on</p>
                <p className="time">2023-04-02T08:07:09"</p>
                <a
                  href="http://192.168.137.1:8000/static/docs/R-f59d8a0c-8a97-4820-b1fb-9b1d58e5b428.pdf"
                  target="_blank"
                  className="videoReport"
                >
                  <button className="viewButton">View Video</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
