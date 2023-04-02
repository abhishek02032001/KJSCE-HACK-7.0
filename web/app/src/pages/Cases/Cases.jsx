import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

import './Cases.scss';
import { casesData, casesColumns } from '../../../constants';
import { baseUrl } from '../../config';

const Cases = () => {
  const navigate = useNavigate();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchAllCases = async () => {
      const { data } = await axios.get(`${baseUrl}/cases/doc/1`);
      console.log(data);
      setCases(data);
    };

    fetchAllCases();
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
              checked={params.row.close_date ? true : false}
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
      headerName: 'Provide Treatment',
      width: 150,
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
              onClick={() => navigate(`/cases/${params.row.id}`)}
              className="viewButton"
            >
              Go
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="cases">
      <div className="container">
        <div className="title">View all Cases</div>

        {/* {cases.length > 0 && ( */}
          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={casesData}
            columns={casesColumns.concat(actionKyc).concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        {/* )} */}
      </div>
    </div>
  );
};

export default Cases;
