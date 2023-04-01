import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

import './AllPatients.scss';
import {ViewDatatable} from "../../components"
import { casesData, casesColumns, patientsData, patientsColumns } from '../../../constants';

const AllPatients = () => {
  const navigate = useNavigate()

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
              checked={params.row.kyc_completed === 1 ? true : false}
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
      width: 160,
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
              onClick={() => navigate(`/patients/${params.row.id}`)}
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
    <div className="allPatients">
      <div className="container">
        <div className="title">Patients</div>

        <DataGrid
          className="datagrid"
          getRowId={(row) => row.id}
          rows={patientsData}
          columns={patientsColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />

      </div>
    </div>
  );
};

export default AllPatients;
