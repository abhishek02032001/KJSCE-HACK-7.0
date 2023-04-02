import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

import './Patient.scss';
import { treatmentData, casesColumns } from '../../../constants';
import { baseUrl } from '../../config';

const Patient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.pathname.split('/')[2];

  const [patientData, setPatientData] = useState([]);
  const [patientCases, setPatientCases] = useState([]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const { data } = await axios.get(`${baseUrl}/users/${patientId}`);
      console.log(data);
      setPatientData(data);
    };

    fetchPatientDetails();
  }, []);

  useEffect(() => {
    const fetchPatientCases = async () => {
      const { data } = await axios.get(`${baseUrl}/cases/user/${patientId}`);
      // console.log(`${baseUrl}/cases/user/${patientId}`)
      console.log(data);
      setPatientCases(data);
    };

    fetchPatientCases();
  }, []);

  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
  }));

  const actionKyc = [
    {
      field: 'kyc_completed',
      headerName: 'Case Active?',
      width: 180,
      type: 'string',
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <GreenSwitch
              checked={params.row.close_date === null ? true : false}
              onClick={() => handleKycStatus(params.row.id)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <label>{params.row.kyc_completed === 1 ? 'Yes' : 'No'}</label>
          </div>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: 'action',
      headerName: 'View Details',
      width: 130,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <button
              style={{ textDecoration: 'none' }}
              onClick={() => setViewDialogBox(params.row.order_id)}
              className="viewButton"
            >
              View
            </button> */}
            <button
              style={{ textDecoration: 'none' }}
              onClick={() =>
                navigate(`/cases/${params.row.id}`)
              }
              className="viewButton"
            >
              View
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="patient">
      <div className="container">
        <div className="title">
          {patientData.name}'s Past Cases
        </div>

        {patientCases && (
          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={patientCases}
            columns={casesColumns.concat(actionKyc).concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};

export default Patient;
