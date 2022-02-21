import React from 'react';
import Status from './Status';

export default function OrderedMed(props) {    
    console.log("OrderedMed rendered", props.med); 
    const {med} = props;
    return(
        <>
        <h2>Order List</h2>
        <table>
        <tbody>
          <tr>
            <th>Medication</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
          {med.length === 0 ? <td colSpan="3">No order yet.</td> : med.map(m => (<tr><td>{m.name}</td><td>{m.quantity} {m.duration}</td></tr>))}
        
        </tbody>
        </table>
        </>
    )
}