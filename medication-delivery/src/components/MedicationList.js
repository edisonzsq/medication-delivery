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
/*
props.medicationList.map(medication => (
    <li key={medication}>
        <span>{JSON.stringify(medication[0].name).slice(1, -1)}</span>
    </li>
))
*/