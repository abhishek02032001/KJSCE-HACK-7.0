export const casesData = [
  {
    id: '1',
    doc_id: '543',
    user_id: 'Prajwal Jaiswal',
    start_date: '21/03/2023',
    close_date: '',
    kyc_completed: 0,
  },
  {
    id: '2',
    doc_id: '126',
    user_id: 'Jaydeep Jethwa',
    start_date: '21/03/2023',
    close_date: '24/03/2023',
    kyc_completed: 1,
  },
  {
    id: '3',
    doc_id: '987',
    user_id: 'Ravi Prasad',
    start_date: '20/03/2023',
    close_date: '',
    kyc_completed: 0,
  },
  {
    id: '4',
    doc_id: '765',
    user_id: 'Abhishek Mishra',
    start_date: '19/03/2023',
    close_date: '19/03/2023',
    kyc_completed: 1,
  },
  {
    id: '5',
    doc_id: '232',
    user_id: 'Prajwal Jaiswal',
    start_date: '03/03/2023',
    close_date: '05/03/2023',
    kyc_completed: 1,
  },
];

export const casesColumns = [
  { field: 'id', headerName: 'Case ID', width: 100 },
  { field: 'doc_id', headerName: 'Doctor ID', width: 100 },
  { field: 'user_id', headerName: 'User Aadhar', width: 250 },
  { field: 'start_date', headerName: 'Start Date', width: 180 },
  { field: 'close_date', headerName: 'Close Date', width: 180 },
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
    blood_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    ctscan_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    mri_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    sonography_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    xray_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
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
    blood_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    ctscan_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    mri_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    sonography_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
    xray_report:
      'https://drive.google.com/file/d/1Gi7zTtncoLFfVaBzxoVl2HKGi5IWknFf/view',
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
  { field: 'aadhar_no', headerName: 'Aadhar ID', width: 150 },
  { field: 'name', headerName: 'Patient Name', width: 180 },
  { field: 'gender', headerName: 'Gender', width: 180 },
  { field: 'address', headerName: 'Address', width: 180 },
  { field: 'birth_date', headerName: 'Birth Date', width: 110 },
  { field: 'contact_no', headerName: 'Contact No.', width: 120 },
  { field: 'emergency_no', headerName: 'Emergency No.', width: 120 },
];

export const patientsData = [];

export const reportsColumns = [
  { field: 'id', headerName: 'Report ID', width: 100 },
  { field: 'case_id', headerName: 'Case ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'purpose', headerName: 'Purpose', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'report_time', headerName: 'Report Time', width: 180 },
];

export const reportsData = [
  {
    id: 5,
    case_id: 3,
    title: 'Head MRI',
    purpose: 'Clotting detection',
    type: 'MRI',
    report_time: '2023-04-02T08:44:36',
    pdf: 'R-154ec5c0-b7b9-4ee2-bd57-bb12d5ea4e3b.pdf',
    video: 'R-a15eff58-4727-49f2-8751-d348a8ca5fa5.mp4',
  },
  {
    id: 4,
    case_id: 3,
    title: 'Back Xray',
    purpose: 'Back Pain',
    type: 'X-Ray',
    report_time: '2023-04-02T08:20:48',
    pdf: 'R-b80b6f92-5d3b-4684-9735-74e66bfaf9f4.pdf',
    video: '',
  },
];
