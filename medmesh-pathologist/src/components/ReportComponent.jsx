import RC from "../components/ReportComponent"
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mri from "../images/mri.png";
import sonography from "../images/sonographer.png";
import xray from "../images/x-ray.png";
import btest from "../images/blood-type.png";

import GReport from "../components/GeneralReport"
import SReport from "../components/WithVideoReport"

import axios from 'axios';




const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

function ReportComponent() {

  const [case_id, setCaseID] = useState('')
  const [title, setTitle] = useState('')
  const [purpose, setPurpose] = useState('')
  const [type, setType] = useState('')

  const [pdf, setPdf] = useState('')


  const [data, setData] = useState({
    case_id: "",
    title: "",
    purpose: "",
    type: "",
    pdf: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function handlePdf(e) {
    console.log(e.target.files);
    setPdf(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    try {
      // const formData = new FormData();

      e.preventDefault();
      const formdata = new FormData();
      formdata.append('case_id', data.case_id);
      formdata.append('title', data.title);
      formdata.append('purpose', data.purpose);
      formdata.append('type', data.type);
      formdata.append('pdf', data.pdf);

      console.log(formdata);


      const result = await axios.post("http://10.0.130.142:8000/reports", formdata);
      console.log(result);


    } catch (error) {
      console.error(error);
    }

  };

  return (
<>
   
          <div className="cardtitle">
            <h1 className=''>Add New Report</h1>
          </div>

          <div className="row p-5  cardUser ">
            <h1 className='text-center'>Select Report Type</h1>
                <div className="d-flex flex-row">
              <Link to="/greport" >

                
            <div class="card rtype" style={{width: "15rem"}}>
              <img src={xray} class="card-img-top mt-2 p-3" />
                  <h5 class="card-title text-center m-4">Xray</h5>
            </div>
              </Link>
              <Link to="/greport" >
            <div class="card rtype" style={{width: "15rem"}}>
              <img src={sonography} class="card-img-top mt-2 p-3" />
                  <h5 class="card-title text-center m-4">Sonography</h5>
            </div>
            </Link>
            <Link to="/greport" >
            <div class="card rtype" style={{width: "15rem"}}>
              <img src={btest} class="card-img-top mt-2 p-3" />
                  <h5 class="card-title text-center m-4">Blood test</h5>
            </div>
            </Link>
            <Link to="/sreport" >
            <div class="card rtype" style={{width: "15rem"}}>

              <img src={mri} class="card-img-top mt-2 p-3" />
                  <h5 class="card-title text-center m-4">MRI</h5>
            </div>
                  </Link>
                  </div>
            



          </div>


          </>

       

  )
}

export default ReportComponent
