import RC from "../components/ReportComponent"
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function GeneralReport() {
  const [case_id, setCaseID] = useState('')
  const [title, setTitle] = useState('')
  const [purpose, setPurpose] = useState('')
  const [type, setType] = useState('')

  // const [pdf, setPdf] = useState('')
  const [ff,setFf] = useState('');
  const [video,setVideo] = useState('');


  const [data, setData] = useState({
    case_id: "",
    title: "",
    purpose: "",
    type: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function handleFf(e) {
    console.log(e.target.files);
    setFf(e.target.files[0])
  }
  function handleVideo(e) {
    console.log(e.target.files);
    setVideo(e.target.files[0])
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
      formdata.append('files', ff);
      formdata.append('files', video);

      console.log(formdata);


      const result = await axios.post("http://10.0.130.142:8000/reports", formdata);
      console.log(result);


    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
         <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="container  card">
          <RC />
    <Form  className="p-5">

              <Form.Field>
                <label>Case ID</label>
                <input type="text" placeholder='Case ID' id="case_id" value={data.case_id} onChange={handle} />
              </Form.Field>
              <Form.Field>
                <label>Report Title</label>
                <input placeholder='Report Name' id="title" value={data.title} onChange={handle} />
              </Form.Field>
              {/* <Form.Select
                fluid
                label='Gender'
                options={options} 
                placeholder='Select Gender'
                id="gender"
                value={data.gender} onChange={handle}
              /> */}
              <Form.Field>

                <label>Report Purpose</label>
                <input type="text" placeholder='Report Purpose' id="purpose" value={data.purpose} onChange={handle} />
              </Form.Field>

              <Form.Field>
                <label>Report Type</label>
                <input type="text" placeholder='Report type' id="type" value={data.type} onChange={handle} />
              </Form.Field>
              {/* <Form.Field>
                <label>Report Time</label>
                <input type="number" placeholder='Report Time' id="emergency_no" value={data.emergency_no} onChange={handle} />
              </Form.Field> */}

              <hr />


              <Form.Field>
                <label>Report File</label>
                <input type="file" placeholder='Report File' id="files" onChange={handleFf} />
              </Form.Field>
              <Form.Field>
                <label>Report Video</label>
                <input type="file" placeholder='Report File' id="files" onChange={handleVideo} />
              </Form.Field>
              {/* <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit'>Submit</Button> */}
            </Form>
            <Link
            to="/user"

          >
            <button type="submit" class="btn btn-success cbtn ms-1 ms-5 mb-5" onClick={handleSubmit} >Add Report</button>
          </Link>
          </div>
         
          </div>
          <div className="col-2"></div>
        </div>
          </>

  )
}

export default GeneralReport
