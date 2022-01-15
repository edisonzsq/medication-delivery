import React, {useEffect} from 'react';

export default function RemoveMedication(props) {
    const {medication, removeMedication} = props;

    useEffect(() => {
        // Remove medication when button clicked
        removeMedication(medication.id);
        alert('Cancel order?');
    }, [medication])

    return (
        <li className="Medication">
            <div className="text">{medication.text}
            <span className="view-remove">
            <button className="view-order">
                View Order
            </button>
            <button
            aria-label="Remove medication"
            className="remove-medication"
            onClick={RemoveMedication}
            >
              X
            </button>
            </span>
            </div>
        </li>
    )
}