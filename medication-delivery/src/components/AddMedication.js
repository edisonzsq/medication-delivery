import React, {useState} from 'react';
import API from '../api/api';
import SelectMedication from './SelectMedication';

export default function AddMedication(props) {
    const blankForm = {
        id: null, 
        name: ''
    }
    const [medication, setMedication] = useState(blankForm);

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
        <SelectMedication handleInput={handleInput} />
        <button className="Button">Order</button>
     </form>
    )
}