import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {AddMedicationForm} from './components/AddMedicationForm';
import {ProcessMedication} from './components/ProcessMedication';
import {RemoveMedication} from './components/RemoveMedication';
import {generateId, getNewProcessedTime} from './components/utilities';
import logo from './logo.jpg';
import './App.css';

export default function App() {
  //Initialize state
  const [medicationList, setMedicationList] = useState([
    {
      id: generateId(),
      name: 'Add new medication',
      processedAt: getNewProcessedTime(),
    },
    {
      id: generateId(),
      name: 'They will be removed after 10 seconds',
      processedAt: getNewProcessedTime(),
    },
  ]);

  // Add new medication to back of array
  const addMedication = (medication) => {
    item.id = itemList.length+1
    setMedication(medication => [...medicationList, medication]);
  }

  //Process medication?

  //Remove medication when close button clicked
  const removeMedication = (medicationIdToRemove) => {
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
            <OrderList key={medication.id} medicationList={medicationList} ProcessMedication={ProcessMedication} removeMedication={removeMedication}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));