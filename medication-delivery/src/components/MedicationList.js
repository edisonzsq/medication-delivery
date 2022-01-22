import React from 'react';

export default function MedicationList(props) { 
    return(
        props.medicationList.map(medication => (
            <>
            <select name="medication" id="medication">
                <option value="medication" key={medication.id}>{medication.name}</option>
            </select>
            </>
            ))
    )
}