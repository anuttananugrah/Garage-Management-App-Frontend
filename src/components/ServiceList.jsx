import React from 'react'

function ServiceList() {
  return (
    <table className="table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Charge</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Oil Change</td>
                  <td>Use premioum quality engine oil only</td>
                  <td>3000</td>
                  <td>
                    <button className="btn btn-dark">Done!</button>
                  </td>
                </tr>
              </tbody>
            </table>
  )
}

export default ServiceList