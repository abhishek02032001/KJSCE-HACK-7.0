export const casesData = [
  {
    id: '1',
    doc_id: '543',
    user_id: 'Prajwal Jaiswal',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
    kyc_completed: 1,
  },
  {
    id: '2',
    doc_id: '126',
    user_id: 'Jaydeep Jethwa',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
    kyc_completed: 0,
  },
  {
    id: '3',
    doc_id: '987',
    user_id: 'Ravi Prasad',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
    kyc_completed: 0,
  },
  {
    id: '4',
    doc_id: '765',
    user_id: 'Abhishek Mishra',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
    kyc_completed: 1,
  },
];

export const casesColumns = [
  { field: 'id', headerName: 'Case ID', width: 200 },
  { field: 'doc_id', headerName: 'Doctor ID', width: 200 },
  { field: 'user_id', headerName: 'User', width: 280 },
  { field: 'start_date', headerName: 'Start Date', width: 150 },
  { field: 'close_date', headerName: 'End Time', width: 150 },
];

export const treatmentData = [
  {
    id: '1',
    doc_id: '765',
    user_id: '1',
    doc_name: 'Dr. John Smith',
    treatment_title: 'Heart Checkup',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus magnam reprehenderit amet.',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
  },
  {
    id: '2',
    doc_id: '122',
    user_id: '1',
    doc_name: 'Dr. John Doe',
    treatment_title: 'Heart Checkup',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.0',
    start_date: '10/01/2023',
    close_date: '11/01/2023',
  },
];

export const treatmentColumns = [
  { field: 'id', headerName: 'Treatment ID', width: 200 },
  { field: 'doc_id', headerName: 'Doctor ID', width: 150 },
  { field: 'doc_name', headerName: 'Doctor Name', width: 150 },
  { field: 'treatment_title', headerName: 'Treatment', width: 250 },
  { field: 'start_date', headerName: 'Start Date', width: 110 },
  { field: 'close_date', headerName: 'End Time', width: 100 },
];

export const patientsColumns = [
  { field: 'id', headerName: 'Patient ID', width: 200 },
  { field: 'aadhar_id', headerName: 'Aadhar ID', width: 350 },
  { field: 'patient_name', headerName: 'Patient Name', width: 350 },
  // { field: 'treatment_title', headerName: 'Treatment', width: 250 },
  // { field: 'start_date', headerName: 'Start Date', width: 110 },
  // { field: 'close_date', headerName: 'End Time', width: 100 },
];

export const patientsData = [
  {
    id: '1',
    aadhar_id: '789665411236',
    patient_name: 'Prajwal Jaiswal',
  },
  {
    id: '2',
    aadhar_id: '987456321478',
    patient_name: 'Abhishek Mishra',
  },
  {
    id: '1',
    aadhar_id: '852378966541',
    patient_name: 'Ravi Prasad',
  },

];
