import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddMedicationForm} from './components/AddMedicationForm';
import {Medication} from './components/Medication';
import {generateId, getNewExpirationTime} from './components/utilities';
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
      expiresAt: getNewExpriationTime(),
    },
  ]);

  const addMedication = medication => {
    setMedication(medication => [medication, ...medication]);
  }

  const removeMedication = medicationIdToRemove => {
    setMedication(medication.filter(medicationItem => medicationItem.id !== medicationIdToRemove))
  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Medication Delivery App</h1>
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