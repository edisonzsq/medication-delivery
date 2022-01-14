import React, {useState} from 'react';
import {getNewProcessedTime} from './utilities';

export default function AddMedicationForm(props) {
    const {addMedication} = props;
    const blankForm = {
        id: null,
        name: "",
        processedAt: ""
    }
    const [medication, setMedication] = useState(blankForm);

    // When user starts typing in input field
    const handleTextChange = ({event}) => {
        const {key, value} = event.target;
        setText({...medication, [key]: value});
    }

    // When order button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!medication.name) {
        return 0;
        addMedication(medication);
        setMedication(blankForm);
        }
    }

    return (
        <form className='AddMedicationForm' onSubmit={handleSubmit}>
            <input
            type='text'
            key='name'
            aria-label='Select your medication'
            placeholder='Select your medication'
            value={medication.name}
            onChange={handleTextChange}
            />
            <input type='submit' value='Order'/>
        </form>
    );
}