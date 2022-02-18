import React, {useState, useEffect} from 'react';
import Quantity from './Quantity';
import API from '../api/api';

export default function SelectMedication(props) {
    const [medicationList, setmedicationList] = useState([])

    const handleClick = async () => {
        const {status, data} = await API.get("/medication");
        console.log("Status", status);
        console.log("Data", data)
        if (status === 200) {
            setmedicationList(data)
        }
    }

    useEffect(() => {
        handleClick();
    }, []);

    const handleSubmit = async () => {
        
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="name"
                id="nameInput"
                placeholder="e.g. Amlodipine 10mg OD"
                value={props.medication.name}
                onClick={handleClick}
                className="Input">
            <option value="option1" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option2" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option3" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option4" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option5" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option6" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option7" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option8" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
            <option value="option9" 
                    key={props.medication.id}>
                {props.data.name}
            </option>
        </select>
        <Quantity />
        <button className="Button">Order</button>
        </form>
    )
}