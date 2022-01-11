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
            <button
            aria-label="Remove medication"
            className="remove-medication"
            onClick={handleRemoveClick}
            >
              X
            </button>
            </div>
        </li>
    )
}