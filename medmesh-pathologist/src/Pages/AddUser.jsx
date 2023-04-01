
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

function AddUser() {

  const [aadhar_no, setAadharNo] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [contact_no, setContactNo] = useState('')
  const [emergency_no, setEmergencyNo] = useState('')
  const [address, setAddress] = useState('')
  const [birth_date, setBirthDate] = useState('')
  const [allergies, setyAllergies] = useState('')
  const [reg_meds,setRegMeds ] = useState('')
  const [medical_conditions, setMedicalConditions] = useState('')
  const [remarks, setRemarks] = useState('')
  // image
  const [image, setImage] = useState('')

  const [data, setData] = useState({
    aadhar_no: "",
    name: "",
    gender: "",
    contact_no:"",
    emergency_no:"",
    address:"",
    birth_date:"",
    allergies:"",
    reg_meds:"",
    medical_conditions:"",
    remarks:""
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    try {
      // const formData = new FormData();
      
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('aadhar_no', data.aadhar_no);
    formdata.append('name', data.name);
    formdata.append('gender', data.gender);
    formdata.append('contact_no', data.contact_no);
    formdata.append('emergency_no', data.emergency_no);
    formdata.append('address', data.address);
    formdata.append('birth_date', data.birth_date);
    formdata.append('allergies', data.allergies);
    formdata.append('reg_meds', data.reg_meds);
    formdata.append('medical_conditions', data.medical_conditions);
    formdata.append('remarks', data.remarks);
    formdata.append('image', image);

    console.log(formdata);

   
        const result = await axios.post("http://10.0.130.142:8000/users/register", formdata);
        console.log(result);


    } catch (error) {
      console.error(error);
    }

    };

  return (

    <div className="row mt-0">
      <div className="col-2"></div>
      <div className="col-8">
        <div className="container  card">
          <div className="cardtitle">
          <h1 className=''>Add New Report</h1>
          </div>
          
          <div className="row p-5  cardUser">
            <Form >

              <Form.Field>
                <label>Case ID</label>
                <input type="text" placeholder='Case ID' id="aadhar_no" value={data.aadhar_no} onChange={handle}   />
              </Form.Field>
              <Form.Field>
                <label>Report Name</label>
                <input placeholder='Report Name'  id="name" value={data.name} onChange={handle} />
              </Form.Field>
              {/* <Form.Select
                fluid
                label='Gender'
                options={options} 
                placeholder='Select Gender'
                id="gender"
                value={data.gender} onChange={handle}
              /> */}
              <label>Report Purpose</label>
                <input type="text" placeholder='Report Purpose' id="gender" value={data.gender} onChange={handle}/>
           
              <Form.Field>
                <label>Report Type</label>
                <input type="number" placeholder='Report type' id="contact_no" value={data.contact_no} onChange={handle}/>
              </Form.Field>
              <Form.Field>
                <label>Report Time</label>
                <input type="number" placeholder='Report Time' id="emergency_no" value={data.emergency_no} onChange={handle} />
              </Form.Field>
              
              <hr />

              
              <Form.Field>
                <label>Report File</label>
                <input type="file" placeholder='Report File' id="image" onChange={handleImage}  />
              </Form.Field>
              {/* <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Submit</Button> */}
            </Form>
           
            {/* <button type="button" class="btn btn-primary cbtn">Add New User</button> */}
            <Link
                to="/user"
               
              > 
            <button type="submit" class="btn btn-success cbtn ms-1" onClick={handleSubmit} >Add Report</button>
              </Link>



          </div>



        </div>
      </div>
      <div className="col-2"></div>
    </div>

  )
}

export default AddUser
