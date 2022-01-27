import React, {useState} from 'react';
import AddMedication from './components/AddMedication';
import MedicationList from './components/MedicationList';
import logo from './logo.jpg';
import API from './api/api';
import {uniqueId} from 'lodash';
import './App.css';

function App() {
  const blankForm = {
    id: null, 
    name: ''
  }
  const [medicationList, setmedicationList] = useState([])

  const apiGetMed = async() => {
    const {status, data} = API.get("/medication")
      console.log("Status", status);
      console.log("Data", data)
      if (status === 200) {
        setmedicationList(data)
      }
  }

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
          <AddMedication apiGetMed={apiGetMed} />
      </div>
      <div className="List">
      <div>
        <h2>Order List</h2>
        <ul>
          <MedicationList medicationList={medicationList} />
        </ul>
      </div>
      </div>     
    </div>
  );
}

export default App;