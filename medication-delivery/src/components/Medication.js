import React, {useEffect} from 'react';

export function Medication(props) {
    const {medication, removeMedication} = props;

    // Remove medication when button clicked
    const handleRemoveClick = () => {
        removeMedication(medication.id);
        alert('Cancel order?')
    };

    useEffect(() => {
        const timeRemaining = medication.expiresAt - Date.now();

        // Expiration time - Current time = Time Remaining
        // Remove medication when time runs out
        const timeout = setTimeout(() => {
            removeMedication(medication.id)
        }, timeRemaining)

        // Effect cleared after medication removed
        return () => {clearTimeout(timeout)}
    }, [medication, removeMedication])

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