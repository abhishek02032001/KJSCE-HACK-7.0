import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './AddCase.scss';
import { baseUrl } from '../../config';

const AddCase = () => {
  const location = useLocation();
  // const caseId = location.pathname.split('/')[3];
  const [newCase, setNewCase] = useState({
    doc_id: '',
    aadhar_no: '',
    start_date: '',
    close_date: '',
  });
  const date = new Date();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setTreatment({...treatment, case_id: caseId})
    // console.log(newCase);

    const res = await axios.post(`${baseUrl}/cases`, {
      doc_id: 1,
      user_id: newCase.aadhar_no,
      start_date: newCase.start_date,
    });
    console.log(res);
    navigate('/');
  };

  return (
    <div className="addCase">
      <div className="container">
        <div className="heading">
          <p>Start a New Case</p>
        </div>

        <div className="form">
          <form>
            <div className="formRow">
              <label htmlFor="caseId">Doctor Id</label>

              <input
                type="text"
                value={newCase.doc_id}
                onChange={(e) =>
                  setNewCase({
                    ...newCase,
                    doc_id: e.target.value,
                    start_date: date.toJSON().slice(0, 19),
                  })
                }
                placeholder="case ID"
              />
            </div>

            <div className="formRow">
              <label htmlFor="aadhar_no">Aadhar No.</label>
              <input
                type="text"
                value={newCase.aadhar_no}
                placeholder="012345678912"
                onChange={(e) =>
                  setNewCase({ ...newCase, aadhar_no: e.target.value })
                }
              />
            </div>

            <button className="viewButton" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCase;
