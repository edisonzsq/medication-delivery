//import React, {useState, useEffect} from 'react';
import Quantity from './Quantity';
//import API from '../api/api';

export default function SelectMedication(props) {
    /*
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
*/
    return (
        <form>
        <select name="name"
                id="nameInput"
                placeholder="e.g. Amlodipine 10mg OD"
                //value={props.medication.name}
                //onClick={handleClick}
                className="Input">
            <option value="" selected="selected" hidden="hidden">Choose medication</option>
            <option value="option1">
                Option 1
            </option>
            <option value="option2">
                Option 2
            </option>
            <option value="option3">
                Option 3
            </option>
            <option value="option4">
                Option 4
            </option>
            <option value="option5">
                Option 5
            </option>
            <option value="option6">
                Option 6
            </option>
            <option value="option7">
                Option 7
            </option>
            <option value="option8">
                Option 8
            </option>
            <option value="option9">
                Option 9
            </option>
        </select>
        <button className="Button">Order</button>
        <div style={{padding: 15}}>
            <Quantity />
        </div>
        </form>
    )
}