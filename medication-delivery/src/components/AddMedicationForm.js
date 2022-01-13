import React, {useState} from 'react';
import {generateId, getNewExpirationTime} from './utilities';

export function AddMedicationForm(props) {
    const [text, setText] = useState('');

    // When user starts typing in input field
    const handleTextChange = ({target}) => {
        setText(target.value);
    }

    // When order button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const medication = {
            id: generateId(),
            text: text,
            expiresAt: getNewExpirationTime(),
        }

        if (text.length > 0) {
        props.addMedication(medication);
        setText('');
        }
    }

    return (
        <form className='AddMedicationForm'>
            <input
            type='text'
            aria-label='Select your medication'
            placeholder='Select your medication'
            value={text}
            onChange={handleTextChange}
            />
            <input type='submit' value='Order' onClick={handleSubmit}/>
        </form>
    );
}
//if (!text)