import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddMedicationForm} from './components/AddMedicationForm';
import {Medication} from './components/Medication';
import {generateId, getNewExpirationTime} from './components/utilities';
import logo from './logo.jpg';
import './App.css';

export default function App() {
  //Initialize state
  const [medication, setMedication] = useState([
    {
      id: generateId(),
      text: 'Add new medication',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: 'They will be removed after 10 seconds',
      expiresAt: getNewExpirationTime(),
    },
  ]);

  // Add new medication to back of array
  const addMedication = (medication) => {
    setMedication(medication => [...medication, medication]);
  }

  //Remove medication when close button clicked
  const removeMedication = (medicationIdToRemove) => {
    setMedication(prev => prev.filter(medication => (medication.id !== medicationIdToRemove)))
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
            <Medication key={medication.id} medication={medication} removeMedication={removeMedication}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));