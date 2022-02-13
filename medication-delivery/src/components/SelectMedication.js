import React, {useState} from 'react';

export default function AddMedication(props) {
    const [medication, setMedication] = useState(blankForm);

    const handleInput = event => {
        const {name, value} = event.target;
        const newMed = {...medication, [name]:value};
        setMedication(newMed);
        console.log("newMed", newMed);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setMedication(blankForm);
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="name"
                id="nameInput"
                placeholder="e.g. Amlodipine 10mg OD"
                value={medication.name}
                onClick={handleInput}
                className="Input">
            <option value="option1" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option2" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option3" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option4" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option5" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option6" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option7" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option8" 
                    key={medication.id}>
                {props.data.name}
            </option>
            <option value="option9" 
                    key={medication.id}>
                {props.data.name}
            </option>
        </select>
        <input type="number" value={medCount}></input>
        <button className="Button">Order</button>
        </form>
    )
}