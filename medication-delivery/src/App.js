import React, {useEffect, useState} from 'react';
import GetMedication from './components/GetMedication';
import OrderedMed from './components/OrderedMed';
import logo from './logo.jpg';
import API from './api/api';
import './App.css';

function App() {
  const [medicationList, setmedicationList] = useState([])

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

  //default state to pass item to orderlist
  const blankForm = {
    name: '',
    quantity: 0
  }

  const [addMed, setAddMed] = useState(blankForm)

  useEffect(() => {
    console.log("addMed is", addMed);
  }, [addMed]);

  // state to print to select med
  const [selectMed, setSelectMed] = useState([]);

  //function to pass med to order list
  function OrderedMed(newMed) {
    const orderList = {...newMed};
    setSelectMed(orderList);
    OrderedMed(orderList, selectMed, setSelectMed);
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
          <GetMedication />
          <SelectMedication />
      </div>
      <div className="List">
      <div>
        <h2>Order List</h2>
        <ul>
          <OrderedMed orderedMed={orderedMed} selectMed={selectMed} setSelectMed={setSelectMed} />
        </ul>
      </div>
      </div>     
    </div>
  );
}

export default App;