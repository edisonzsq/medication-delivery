import React, {useEffect} from 'react';

export function Medication(props) {
    const {medication, removeMedication} = props;

    const handleRemoveClick = () => {
        removeMedication(medication.id);
    };

    useEffect(() => {
        const timeRemaining = medication.expiresAt - Date.now();

        const timeoutId = setTimeout(() => {
            removeMedication(medication.id)
        }, timeRemaining)

        return () => clearTimeout(timeoutId)
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