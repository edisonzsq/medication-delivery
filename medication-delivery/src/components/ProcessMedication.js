import React, {useEffect} from 'react';

export function ProcessMedication(props) {
    const {medication, processMedication} = props;

    useEffect(() => {
        const timeRemaining = medication.processedAt - Date.now();

        // Processed time - Current time = Time Remaining
        // Process medication when time runs out
        const timeout = setTimeout(() => {
            processMedication(medication.id)
            alert('Order has been placed');
        }, timeRemaining)

        // Effect cleared after medication removed
        return () => {clearTimeout(timeout)}
    }, [medication, processMedication])

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
            onClick={ProcessMedication}
            >
              X
            </button>
            </span>
            </div>
        </li>
    )
}