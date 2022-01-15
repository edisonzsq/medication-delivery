import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddMedicationForm} from './components/AddMedicationForm';
import {RemoveMedication} from './components/RemoveMedication';
import {generateId, getNewProcessedTime} from './components/utilities';
import logo from './logo.jpg';
import './App.css';

export default function App() {
  //Initialize state
  const [medicationList, setMedicationList] = useState([
    {
      id: generateId(),
      name: 'Add new medication'
    },
    {
      id: generateId(),
      name: 'They will be removed after 10 seconds'
    },
  ]);

  // Add new medication to back of array
  const addMedication = (medication) => {
    medication.id = medicationList.length+1
    setMedication(medication => [...medicationList, medication]);
  }

  //Process medication?

  //Remove medication when close button clicked
  const RemoveMedication = (medicationIdToRemove) => {
    setMedicationList(medicationList.filter(medication => (medication.id !== medicationIdToRemove)));
  }

  return (
    <div className='App'>
      <div className='header'>
        <span className="logo">
          <img src={logo} alt="logo" height={40} width={140}></img>
        </span>
        <span className="login">Log In</span><br />
        <h1>Medication Order List</h1>
      </div>
      <div className='main'>
        <AddMedicationForm addMedication={addMedication}/>
        <ul className='medication'>
          {medication.map((medication) => (
            <OrderList key={medication.id} medicationList={medicationList} RemoveMedication={RemoveMedication}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));