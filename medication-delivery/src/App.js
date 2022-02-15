import React, {useEffect, useState} from 'react';
import GetMedication from './components/GetMedication';
import OrderedMed from './components/OrderedMed';
import logo from './logo.jpg';
import API from './api/api';
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="Header">
        <span className="logo">
          <img src={logo} alt="logo" height={40} width={140} />
        </span>
        <span className="login">Log In</span><br />
      </div>
      <h1>Medication Delivery App</h1>
      <div className="Form">
          <SelectMedication />
      </div>
      <div className="List">
      <div>
        <h2>Order List</h2>
        <table>
          <tr>
            <th>Medication</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
          <tr>
            <td><OrderedMed /></td>
            <td><Quantity /></td>
            <td><Status /></td>
          </tr>
        </table>
      </div>
      </div>     
    </div>
  );
}

export default App;