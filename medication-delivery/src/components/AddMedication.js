import React, {useState} from 'react';
import API from '../api/api';

export default function AddMedication(props) {
    const blankForm = {
        id: null, 
        name: ''
    }
    const [medication, setMedication] = useState(blankForm);

    const handleInput = event => {
        
        const {name, value} = event.target
        setMedication({...medication, [name]: value})
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        const res = await API.post("/medication", {id: null, name: ""})
            console.log(res.data)
            props.addMedication(res.data.medication);
            setMedication(blankForm);
    }

    return (
     <form onSubmit={handleSubmit}>
         <input type="text"
                name="name"
                placeholder="e.g. Amlodipine 10mg OD"
                value={medication.name}
                onChange={handleInput}
                className="Input" />
                <button className="Button">Order</button>
     </form>
    )
}