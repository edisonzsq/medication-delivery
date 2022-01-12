import React, {useState} from 'react';
import {generateId, getNewExpirationTime} from './utilities';

export function AddMedicationForm(props) {
    const [medication, setMedication] = useState('')

    const handleMedicationChange = ({target}) => {
        setMedication(target.value)
    }

    const handleSubmit = event => {
        if (!medication) {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        props.addMedication({
            id: generateId(),
            text: medication,
            expiresAt: getNewExpirationTime()
        })
        setMedication('');
    }

    return (
        <form className='AddMedicationForm' onSubmit={handleSubmit}>
            <input
            type='text'
            aria-label='Select your medication'
            placeholder='Select your medication'
            value={medication}
            onChange={handleMedicationChange}
            />
            <input type='submit' value='Order'/>
        </form>
    );
}