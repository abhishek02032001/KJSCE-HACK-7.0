import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

import './Home.scss';
import { casesData, casesColumns } from '../../../constants';
import { baseUrl } from '../../config';

const Home = () => {
  const navigate = useNavigate();
  const [cases, setCases] = useState();

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
      headerName: 'Case Completed?',
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
            <label>{params.row.close_date ? 'Yes' : 'No'}</label>
          </div>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
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
              View Reports
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
          <div className="subtitle">
            <Link to="/cases">View all cases...</Link>
          </div>
          <div className="details">
            <p>20</p>
            <div>cases currently need action</div>
          </div>
        </div>

        <div className="card">
          <div className="title">All Cases</div>
          <div className="subtitle">
            <Link to="/cases">View all cases...</Link>
          </div>
          <div className="details">
            <p>67</p>
            <div>cases recorded on MedMesh</div>
          </div>
        </div>

        <div className="card">
          <div className="title">Users Registered</div>
          <div className="subtitle">
            <Link to="/patients">View all patients...</Link>
          </div>
          <div className="details">
            <p>33</p>
            <div>patients registered on our Platform</div>
          </div>
        </div>

        <div className="card special">
          <Link to="/diagnosis">
            <div className="title">Diagnosis</div>
            <div className="details">
              <p>+</p>
            </div>
            <div style={{color: "gray"}}>
              Prescribe diagnosis for the Patient...
            </div>
          </Link>
        </div>
      </div>
      <div className="table">
        <div className="title">Recent Cases</div>

        {cases ? (
          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={cases}
            columns={casesColumns.concat(actionKyc).concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : (
          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={casesData}
            columns={casesColumns.concat(actionKyc).concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};

export default Home;
