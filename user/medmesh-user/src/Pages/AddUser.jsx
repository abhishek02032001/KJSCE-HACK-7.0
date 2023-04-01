
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState, useEffect } from 'react';

import axios from 'axios';


const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

function AddUser() {


  const[count,setCount]=useState("");

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

  const handleSubmit = async (e) => {
    try {
      // const formData = new FormData();
      setImage(
        URL.createObjectURL(e.target.image[0])
    );
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('aadhar_no', aadhar_no);
    formdata.append('name', name);
    formdata.append('gender', gender);
    formdata.append('contact_no', contact_no);
    formdata.append('emergency_no', emergency_no);
    formdata.append('address', address);
    formdata.append('birth_date', birth_date);
    formdata.append('allergies', allergies);
    formdata.append('reg_meds', reg_meds);
    formdata.append('medical_conditions', medical_conditions);
    formdata.append('remarks', remarks);
    console.log(formdata);

   
        const result = await axios.post("http://10.0.130.142:8000/users/register", formdata);
        console.log(result);
   
      // console.log(response)

    } catch (error) {
      console.error(error);
    }

    };

  return (
    // <div>
    //   <h1>Add New Users</h1>
    // </div>
    <div className="row mt-0">
      <div className="col-2"></div>
      <div className="col-8">
        <div className="container  card">
          <div className="cardtitle">
          <h1 className=''>Add New User</h1>
          </div>
          
          <div className="row p-5  cardUser">
            <Form >

              <Form.Field>
                <label>Aadhar Number</label>
                <input type="text" placeholder='Aadhar Number' id="aadhar_no" value={data.aadhar_no} onChange={handle}   />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input placeholder='Full name'  id="name" value={data.name} onChange={handle} />
              </Form.Field>
              {/* <Form.Select
                fluid
                label='Gender'
                options={options} 
                placeholder='Select Gender'
                id="gender"
                value={data.gender} onChange={handle}
              /> */}
              <label>Gender</label>
                <input type="text" placeholder='Type Gender' id="gender" value={data.gender} onChange={handle}/>
           
              <Form.Field>
                <label>Contact No.</label>
                <input type="number" placeholder='Conatact Number' id="contact_no" value={data.contact_no} onChange={handle}/>
              </Form.Field>
              <Form.Field>
                <label>Emergency Number</label>
                <input type="number" placeholder='Emergency Number' id="emergency_no" value={data.emergency_no} onChange={handle} />
              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input placeholder='Address' id="address" value={data.address} onChange={handle}/>
              </Form.Field>
              <Form.Field>
                <label>Birthdate</label>
                <input type="date" placeholder='Birthdate' id="birth_date" value={data.birth_date} onChange={handle}/>
              </Form.Field>
              <hr />

              <Form.Field>
                <label>Allergies</label>
                <input placeholder='Allergies' id="allergies" value={data.allergies} onChange={handle}/>
              </Form.Field>
              <Form.Field>
                <label>Regular Medications</label>
                <input placeholder='Medications' id="reg_meds" value={data.reg_meds} onChange={handle} />
              </Form.Field>
              <Form.Field>
                <label>Medical Conditions</label>
                <input placeholder='Medical illness' id="medical_conditions" value={data.medical_conditions} onChange={handle}/>
              </Form.Field>

              <Form.Field>
                <label>Remark,if any</label>
                <input placeholder='Remarks' id="remarks" value={data.remarks} onChange={handle}/>
              </Form.Field>
              <Form.Field>
                <label>Image</label>
                <input type="file" placeholder='Image' id="image"  />
              </Form.Field>
              {/* <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Submit</Button> */}
            </Form>
           
            {/* <button type="button" class="btn btn-primary cbtn">Add New User</button> */}
            <button type="submit" class="btn btn-success cbtn ms-2" onClick={(e)=>handleSubmit()} >Add New User</button>



          </div>



        </div>
      </div>
      <div className="col-2"></div>
    </div>

  )
}

export default AddUser
