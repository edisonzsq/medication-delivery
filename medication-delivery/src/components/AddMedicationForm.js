import React, {useState} from 'react';
import {generateId, getNewExpirationTime} from './utilities';

export function AddMedicationForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = ({event}) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const medication = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime()
        }

        if (text.length > 0) {
        props.addMedication(medication);
        setText('');
        }
    }

    return (
        <form className='AddMedicationForm' onSubmit={handleSubmit}>
            <input
            type='text'
            aria-label='Select your medication'
            placeholder='Select your medication'
            value={text}
            onChange={handleTextChange}
            />
            <input type='submit' value='Order'/>
        </form>
    );
}
//if (!text)