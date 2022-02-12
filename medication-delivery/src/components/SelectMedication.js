import React, {useState} from 'react';

export default function AddMedication(props) {
    const blankForm = {
        id: null, 
        name: ''
    }
    const [medication, setMedication] = useState(blankForm);

    const handleInput = event => {
        const {name, value} = event.target;
        const newMed = {...medication, [name]:value};
        const id = medication.id + 1;
        newMed.id = id
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
                onChange={handleInput}
                className="Input">
            <option value="option1" 
                    key={medication.id}>
                {JSON.stringify(medication[0].name).slice(1, -1)}
            </option>
            <option value="option2" 
                    key={medication.id}>
                {JSON.stringify(medication[1].name).slice(1, -1)}
            </option>
            <option value="option3" 
                    key={medication.id}>
                {JSON.stringify(medication[2].name).slice(1, -1)}
            </option>
            <option value="option4" 
                    key={medication.id}>
                {JSON.stringify(medication[3].name).slice(1, -1)}
            </option>
            <option value="option5" 
                    key={medication.id}>
                {JSON.stringify(medication[4].name).slice(1, -1)}
            </option>
            <option value="option6" 
                    key={medication.id}>
                {JSON.stringify(medication[5].name).slice(1, -1)}
            </option>
            <option value="option7" 
                    key={medication.id}>
                {JSON.stringify(medication[6].name).slice(1, -1)}
            </option>
            <option value="option8" 
                    key={medication.id}>
                {JSON.stringify(medication[7].name).slice(1, -1)}
            </option>
            <option value="option9" 
                    key={medication.id}>
                {JSON.stringify(medication[8].name).slice(1, -1)}
            </option>
        </select>
        <button className="Button">Order</button>
        </form>
    )
}
// <SelectMedication id={element.id} data={element}/>;