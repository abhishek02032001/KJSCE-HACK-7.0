import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import './Reports.scss';
import { reportsColumns, reportsData } from '../../../constants';
import { baseUrl } from '../../config';

const Reports = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const caseId = location.pathname.split('/')[2];

  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data } = await axios.get(`${baseUrl}/reports/${caseId}`);
      console.log(data);
      setReports(data);
    };

    fetchReports();
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
      headerName: 'View PDF',
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

            {params.row.pdf ? (
              <a
                href={`${baseUrl}/static/docs/${params.row.pdf}`}
                target="_blank"
              >
                <button
                  style={{ textDecoration: 'none' }}
                  className="viewButton"
                >
                  View
                </button>
              </a>
            ) : (
              <a>NA</a>
            )}
          </div>
        );
      },
    },
  ];

  const viewVideoColumn = [
    {
      // field: 'action',
      headerName: 'View Video',
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
            {params.row.video ? (
              <a
                href={`${baseUrl}/static/videos/${params.row.video}`}
                target="_blank"
              >
                <button
                  style={{ textDecoration: 'none' }}
                  className="viewButton"
                >
                  View
                </button>
              </a>
            ) : (
              <a>NA</a>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="reports">
      <div className="container">
        <div className="title">Patient's Reports</div>

        <DataGrid
          className="datagrid"
          getRowId={(row) => row.id}
          rows={reports}
          columns={reportsColumns.concat(actionColumn).concat(viewVideoColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Reports;
