import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

import './Home.scss';
import { casesData, casesColumns } from '../../../constants';

const Home = () => {
  const navigate = useNavigate();

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
    <div className="home">
      <div className="featuredCards">
        <div className="card">
          <div className="title">Cases Active</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>20</p>
            <div>cases</div>
          </div>
        </div>

        <div className="card">
          <div className="title">All Cases</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>33</p>
            <div>cases</div>
          </div>
        </div>

        <div className="card">
          <div className="title">Users Registered</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>67</p>
            <div>cases</div>
          </div>
        </div>

        <div className="card">
          {/* <div className="title">All Cases</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>125</p>
            <div>cases</div>
          </div> */}
        </div>

        {/* <div className="newCard">
          <div className="title">Cases Active</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>20</p>
            <div>cases</div>
          </div>
        </div> */}
      </div>
      <div className="table">
        <div className="title">Recent Cases</div>

        <DataGrid
          className="datagrid"
          getRowId={(row) => row.id}
          rows={casesData}
          columns={casesColumns.concat(actionKyc)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Home;
