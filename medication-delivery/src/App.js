import React, {useEffect, useState} from 'react';
import SelectMedication from './components/SelectMedication';
//import OrderedMed from './components/OrderedMed';
//import Quantity from './components/Quantity';
import Status from './components/Status';
import logo from './logo.jpg';
import API from './api/api';
import './App.css';

function App() {

  const [medicationList, setmedicationList] = useState([]);

    const getMedication = async () => {
        const {status, data} = await API.get("/medication");
        console.log("Status", status);
        console.log("Data", data)
        if (status === 200) {
            setmedicationList(data)
        }
    }

    useEffect(() => {
      getMedication();
    }, []);

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
          <SelectMedication data={medicationList} />
      </div>
      <div className="List">
      <div>
        <h2>Order List</h2>
        <table>
        <tbody>
          <tr>
            <th>Medication</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>OrderedMed</td>
            <td>Quantity</td>
            <td><Status /></td>
          </tr>
        </tbody>
        </table>
      </div>
      </div>     
    </div>
  );
}

export default App;