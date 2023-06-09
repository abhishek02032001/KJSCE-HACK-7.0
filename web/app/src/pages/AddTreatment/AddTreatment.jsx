import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './AddTreatment.scss';
import { baseUrl } from '../../config';

const AddTreatment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const caseId = location.pathname.split('/')[3];
  const [treatment, setTreatment] = useState({
    case_id: '',
    title: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/diagnosis`, {
        case_id: treatment.case_id,
        title: treatment.title,
        description: treatment.description,
      });

      console.log(res);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
    console.log(treatment);
    setTreatment({ case_id: '', title: '', description: '' });
  };

  // useEffect(() => {
  //   if (location.pathname.split('/').length === 4) {
  //     setTreatment({ ...treatment, case_id: caseId });
  //   }
  // }, []);

  return (
    <div className="addTreatment">
      <div className="container">
        <div className="heading">
          <p>Prescribe Treatment</p>
        </div>

        <div className="form">
          <form>
            <div className="formRow">
              <label htmlFor="caseId">Case Id</label>
              {location.pathname.split('/').length === 4 ? (
                <input type="text" defaultValue={caseId} />
              ) : (
                <input
                  type="text"
                  value={treatment.case_id}
                  onChange={(e) =>
                    setTreatment({ ...treatment, case_id: e.target.value })
                  }
                  placeholder="case ID"
                />
              )}
            </div>

            <div className="formRow">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={treatment.title}
                placeholder="Prescribe Treatment..."
                onChange={(e) =>
                  setTreatment({ ...treatment, title: e.target.value })
                }
              />
            </div>
            <div className="formRow">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                value={treatment.description}
                placeholder="Add Description..."
                onChange={(e) =>
                  setTreatment({ ...treatment, description: e.target.value })
                }
              />
            </div>

            <button className="viewButton" onClick={handleSubmit}>
              Prescribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTreatment;
