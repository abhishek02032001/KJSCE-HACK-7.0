import axios from "axios"
import { useState, useEffect } from "react";

function Users() {


  const [value, setValue] = useState([]);
useEffect(() => {
  fetchValue();
}, []);


const fetchValue   = () => {

axios.get("http://10.0.130.142:8000/reports/3")
.then((response) => {
  console.log(response.data)
  setValue(response.data)
})


}
  return (
    <div>


      <di className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="cardtitle">
            <h1 className=''>Report List</h1>
          </div>
          <table class="ui celled padded table">
            <thead className='text-center'>
              <tr><th class="single line ">User</th>
                <th>Case ID</th>
                <th>Patient Name</th>
                <th>Report Name</th>
                <th>Report Type</th>
                <th>Report File</th>
              </tr></thead>
            <tbody className=''>
             
                
                  
                    <tr>
                      <td>
                        <h4 class="ui image header">
                          
                          <div class="content">
                            12{value.name}
                            
                          </div>
                        </h4></td>
                      <td class="right aligned">
                        Lena{value.aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">Brain CT Scan {value.contact_no}</div>
                      </td>
                      <td class="right aligned">
                        CT Scan{value.emergency_no}

                      </td>
                      <td>Creatine supplementation{value.pdf} </td>
                      <td className="text-center"><button type="button" class="btn btn-success">View</button>{value.pdf} </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 class="ui image header">
                          
                          <div class="content">
                            12{value.name}
                            
                          </div>
                        </h4></td>
                      <td class="right aligned">
                        Lena{value.aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">Brain CT Scan {value.contact_no}</div>
                      </td>
                      <td class="right aligned">
                        CT Scan{value.emergency_no}

                      </td>
                      <td>Creatine supplementation{value.pdf} </td>
                      <td className="text-center"><button type="button" class="btn btn-success">View</button>{value.pdf} </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 class="ui image header">
                          
                          <div class="content">
                            12{value.name}
                            
                          </div>
                        </h4></td>
                      <td class="right aligned">
                        Lena{value.aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">Brain CT Scan {value.contact_no}</div>
                      </td>
                      <td class="right aligned">
                        CT Scan{value.emergency_no}

                      </td>
                      <td>Creatine supplementation{value.pdf} </td>
                      <td className="text-center"><button type="button" class="btn btn-success">View</button>{value.pdf} </td>
                    </tr>
                    <tr>
                      <td>
                        <h4 class="ui image header">
                          
                          <div class="content">
                            12{value.name}
                            
                          </div>
                        </h4></td>
                      <td class="right aligned">
                        Lena{value.aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">Brain CT Scan {value.contact_no}</div>
                      </td>
                      <td class="right aligned">
                        CT Scan{value.emergency_no}

                      </td>
                      <td>Creatine supplementation{value.pdf} </td>
                      <td className="text-center"><button type="button" class="btn btn-success">View</button>{value.pdf} </td>
                    </tr>


                

              


            </tbody>
            <tfoot>
              <t  r><th colspan="5">
                <div class="ui right floated pagination menu">
                  <a class="icon item">
                    <i class="left chevron icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i class="right chevron icon"></i>
                  </a>
                </div>
              </th>
              </t></tfoot>
          </table>
        </div>
        <div className="col-2"></div>
      </di>
    </div>
  )
}

export default Users
