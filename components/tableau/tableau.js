import React, { Component } from 'react';
const users = require('../tableau/users.json');

export class Table extends Component {
  render() {
      return (
        <>
            <div>
              <table border="3">
                <tbody>
                  <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>          
                  </tr>
                  {users.users.map((item, i) => (
                      <tr key={i}>
                          <td>{item.name}</td>
                          <td>{item.phone}</td>
                          <td><a href={"mailto:"+item.email}>{item.email}</a></td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    )
  }
}

export default Table