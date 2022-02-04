import React, {useState} from 'react';
import AddMedication from './components/AddMedication';
import MedicationList from './components/MedicationList';
import logo from './logo.jpg';
import API from './api/api';
import {v4 as uuid} from 'uuid';
import './App.css';

function App() {
  const [medicationList, setmedicationList] = useState([])

  const addMedication = () => {
    API.get("/medication").then((res) => {
      console.log("Status", res.status);
      console.log("Data", res.data)
      res.data.id = uuid();
      setmedicationList([...medicationList, res.data])
      console.log("Order Id:", res.data.id);
      const response = res.data;
      console.log(response);

      //const matched = response.find(({name}) => name === "Atenolol 50mg OD");
      //console.log(matched);
    })
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
          <AddMedication addMedication={addMedication} />
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