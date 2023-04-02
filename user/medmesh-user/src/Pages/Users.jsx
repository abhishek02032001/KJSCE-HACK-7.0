import { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
  const count =0

  const [y, setY] = useState([]);
  useEffect(() => {
    fetchY();
  }, []);


  const fetchY = () => {

  axios.get("http://10.0.130.142:8000/users")
  .then((response) => {
    console.log(response.data)
    setY(response.data)
  })


  }



  return (
    <div>

      <di classNameName="row">
        <div classNameName="col-2"></div>
        <div classNameName="col-8 card">
          <div classNameName="cardtitle">
            <h1 classNameName=''>Users</h1>
            <h2>{y[2].name}</h2>
          </div>
          <table classNameName="ui celled padded table">
            <thead classNameName='text-center'>
              <tr><th className="single line ">User</th>
                <th>Aadhar Number</th>
                <th>Contact No.</th>
                <th>Emergency Contact No.</th>
                <th>Medical illness</th>
              </tr></thead>    
                       <tbody>
                        <tr>
                        <td>
                        <h4 class="ui image header">
                          <img src="/images/avatar2/small/lena.png" class="ui mini rounded image" />
                          {y[0].Photo ?
                            <img class="ui mini rounded image" src={`data:image/png;base64,${y[0].image}`} /> :
                            ''}
                          <div class="content">
                            Lena{y[0].name}
                            <div class="sub header">22{y[0].birth_date},{y[0].gender}
                            </div>
                          </div>
                        </h4></td>
                        <td class="right aligned">
                        {y[0].aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">+91 7387761061 {y[0].contact_no}</div>
                      </td>
                      <td class="right aligned">
                        9819778067{y[0].emergency_no}

                      </td>
                      <td>Creatine supplementation{y[0].medical_conditions} </td>


                        </tr>
                       </tbody>

            <tfoot>
              <tr><th colspan="5">
                <div className="ui right floated pagination menu">
                  <a className="icon item">
                    <i className="left chevron icon"></i>
                  </a>
                  <a className="item">1</a>
                  <a className="item">2</a>
                  <a className="item">3</a>
                  <a className="item">4</a>
                  <a className="icon item">
                    <i className="right chevron icon"></i>
                  </a>
                </div>
              </th>
              </tr></tfoot>
          </table>
        </div>
        <div classNameName="col-2"></div>
      </di>
    </div>
  )
}

