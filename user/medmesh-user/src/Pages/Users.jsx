import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = () => {
    axios.get("http://10.120.102.192:8000/hotels/")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data)
      })
  }


  return (
    <div>

      <di className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="cardtitle">
            <h1 className=''>Users</h1>
          </div>
          <table class="ui celled padded table">
            <thead className='text-center'>
              <tr><th class="single line ">User</th>
                <th>Aadhar Number</th>
                <th>Contact No.</th>
                <th>Emergency Contact No.</th>
                <th>Medical illness</th>
              </tr></thead>
            <tbody className=''>
              {
                users.map((value) => {
                  return (
                    <tr>
                      <td>
                        <h4 class="ui image header">
                          <img src="/images/avatar2/small/lena.png" class="ui mini rounded image" />
                          {value.Photo ?
                            <img class="ui mini rounded image" src={`data:image/png;base64,${value.Photo}`} /> :
                            ''}
                          <div class="content">
                            Lena{value.name}
                            <div class="sub header">22{value.birth_date},{value.gender}
                            </div>
                          </div>
                        </h4></td>
                      <td class="right aligned">
                        666028552727{value.aadhar_no}
                      </td>
                      <td>
                        <div class="right aligned" data-rating="3" data-max-rating="3">+91 7387761061 {value.contact_no}</div>
                      </td>
                      <td class="right aligned">
                        9819778067{value.emergency_no}

                      </td>
                      <td>Creatine supplementation{value.medical_conditions} </td>
                    </tr>

                  )

                })

              }


            </tbody>
            <tfoot>
              <tr><th colspan="5">
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
              </tr></tfoot>
          </table>
        </div>
        <div className="col-2"></div>
      </di>
    </div>
  )
}

export default Users
