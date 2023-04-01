import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const medicinesColumns = [
  { field: 'medicine_name', headerName: 'Medicine Name', width: 200 },
  { field: 'user', headerName: 'User', width: 200 },
  { field: 'contact_no', headerName: 'User Phone No.', width: 150 },
  { field: 'order_date', headerName: 'Order Date', width: 110 },
  { field: 'order_time', headerName: 'Order Time', width: 100 },
  { field: 'quantity', headerName: 'Quantity', width: 100 },
];

export const medicinesData = [
  {
    order_id: '1',
    medicine_name: 'Combiflam',
    user: 'Prajwal Jaiswal',
    contact_no: '12345677890',
    email: 'pj@email.com',
    order_date: '26/03/2023',
    order_time: '01:23 am',
    kyc_completed: 1,
    quantity: 35,
  },
  {
    order_id: '2',
    medicine_name: 'Althrocin',
    user: 'Jaydeep Jethwa',
    contact_no: '7894461230',
    email: 'jj@email.com',
    order_date: '20/03/2023',
    order_time: '10:22 pm',
    kyc_completed: 0,
    quantity: 35,
  },
  {
    order_id: '3',
    medicine_name: 'Crocin',
    user: 'Abhishek Mishra',
    contact_no: '7894461230',
    email: 'am@email.com',
    order_date: '13/03/2023',
    order_time: '09:45 am',
    kyc_completed: 0,
    quantity: 12,
  },
  {
    order_id: '4',
    medicine_name: 'Crocin',
    user: 'Abhishek Mishra',
    contact_no: '7894461230',
    email: 'am@email.com',
    order_date: '13/03/2023',
    order_time: '09:45 am',
    kyc_completed: 0,
    quantity: 12,
  },
  {
    order_id: '5',
    medicine_name: 'Crocin',
    user: 'Abhishek Mishra',
    contact_no: '7894461230',
    email: 'am@email.com',
    order_date: '13/03/2023',
    order_time: '09:45 am',
    kyc_completed: 0,
    quantity: 12,
  },
  {
    order_id: '6',
    medicine_name: 'Crocin',
    user: 'Abhishek Mishra',
    contact_no: '7894461230',
    email: 'am@email.com',
    order_date: '13/03/2023',
    order_time: '09:45 am',
    kyc_completed: 0,
    quantity: 12,
  },
];

import './Home.scss';

const Home = () => {
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
      headerName: 'Status',
      width: 180,
      type: 'string',
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <GreenSwitch
              checked={params.row.kyc_completed === 1 ? true : false}
              onClick={() => handleKycStatus(params.row.user_id)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <label>
              {params.row.kyc_completed === 1 ? 'Provided' : 'Not Provided'}
            </label>
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
            <button
              style={{ textDecoration: 'none' }}
              onClick={() => setViewDialogBox(params.row.order_id)}
            >
              <div className="viewButton">View</div>
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
            <p>125</p>
            <div>cases</div>
          </div>
        </div>

        <div className="newCard">
          {/* <div className="title">Cases Active</div>
          <div className="subtitle">Lorem ipsum dolor sit amet.</div>
          <div className="details">
            <p>20</p>
            <div>cases</div>
          </div> */}
        </div>
      </div>
      <div className="table">
        <div className="title">Recent Cases</div>

        <DataGrid
          className="datagrid"
          getRowId={(row) => row.order_id}
          rows={medicinesData}
          columns={medicinesColumns.concat(actionKyc).concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Home;
