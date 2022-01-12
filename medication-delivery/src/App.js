import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddMedicationForm} from './components/AddMedicationForm';
import {Medication} from './components/Medication';
import {generateId, getNewExpirationTime} from './components/utilities';
import logo from './logo.jpg';
import './App.css';

export default function App() {
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

  const addMedication = medication => {
    setMedication(medication => [...medication, medication]);
  }

  const removeMedication = medicationIdToRemove => {
    setMedication(medication.filter(medicationItem => medicationItem.id !== medicationIdToRemove))
  }

  return (
    <div className='App'>
      <div className='header'>
        <span className="logo">
          <img src={logo} alt="logo" height={40} width={140} style={{float: "right"}}></img>
        </span>
        <span className="login">Log In</span><br />
        <h1>Medication Order List</h1>
      </div>
      <div className='main'>
        <AddMedicationForm addMedication={addMedication}/>
        <ul className='medication'>
          {medication.map((medication) => (
            <Medication key={medication.id} medication={medication} />
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
//removeMedication={removeMedication}