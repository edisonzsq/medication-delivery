import React, {useState} from 'react';

export default function GetMedication(props) {
    const blankForm = {
        id: null, 
        name: ''
    }
    const [medication, setMedication] = useState(blankForm);

    const handleInput = event => {
        const {name, value} = event.target;
        const newMed = {...medication, [name]:value};
        setMedication(newMed);
        console.log("newMed", newMed);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        props.getMedication(medication);
        setMedication(blankForm);
        console.log("Input:", medication.name);
        console.log("Input2:", {medication});
    }

    return (
     <form onSubmit={handleSubmit}>
         <input type="text"
                name="name"
                id="nameInput"
                placeholder="e.g. Amlodipine 10mg OD"
                value={medication.name}
                onChange={handleInput}
                className="Input" />
                <button className="Button">Order</button>
     </form>
    )
}