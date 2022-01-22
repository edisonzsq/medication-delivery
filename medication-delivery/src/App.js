import React, {useState} from 'react';
import AddMedication from './components/AddMedication';
import MedicationList from './components/MedicationList';
import logo from './logo.jpg';
import API from './api/api';
import './App.css';

function App() {
  const [medicationList, setmedicationList] = useState([])
  const blankForm = [
    {id: null, name: ''}
  ]

  const addMedication = () => {
    API.get("/medication").then((res) => {
      console.log("Status", res.status);
      console.log("Data", res.data)
      setmedicationList([...medicationList, res.data])
      console.log(res.data);
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
          <MedicationList medicationList={medicationList} />
      </div>
      </div>     
    </div>
  );
}

export default App;