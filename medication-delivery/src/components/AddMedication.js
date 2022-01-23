import React, {useState} from 'react';
import API from '../api/api';

export default function AddMedication(props) {
    const blankForm = {
        id: null, 
        name: ''
    }
    const [medication, setMedication] = useState(blankForm);

    const handleInput = event => {
        const newMed = {...medication};
        newMed.name = event.target.value;
        console.log("newMed", newMed);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        const res = await API.post("/medication", medication)
        if (res.status === 200) {
            console.log("Res data", res.data)
            const newMed = [...medication, newMed]
            //props.addMedication(res.data.medication);
            setMedication(blankForm);
        }
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