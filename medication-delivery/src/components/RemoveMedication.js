import React, {useEffect} from 'react';

export function RemoveMedication(props) {
    const {medication, removeMedication} = props;

    useEffect(() => {
        // Remove medication when button clicked
        const handleRemoveClick = () => {
        removeMedication(medication.id);
        alert('Cancel order?');
        }
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
            onClick={handleRemoveClick}
            >
              X
            </button>
            </span>
            </div>
        </li>
    )
}