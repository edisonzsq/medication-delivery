import React from 'react';

function OrderList(props) {
    const {removeMedication} = props;
    let medicationTab = null;

    if(props.medicationList.length>0) {
        medicationTab = props.medicationList.map(medication => {
            return (
                <ul>
                    <li className="Medication">
                    <div className="name">{medication.name}
                    <span className="view-remove">
                    <button className="view-order">
                        View Order
                    </button>
                    <button
                    aria-label="Remove medication"
                    className="remove-medication"
                    onClick={() => removeMedication(medication.id)}
                    >
                    X
                    </button>
                    </span>
                    </div>
                    </li>
                </ul>
            )
        })
    } else {
        medicationTab =
        <ul>
            <li>No items in medication list</li>
        </ul>
    }
    return (
        <ul>
            <li className="Medication">
            <div className="name">{medication.name}
            <span className="view-remove">
            <button className="view-order">
                View Order
            </button>
            <button
            aria-label="Remove medication"
            className="remove-medication"
            onClick={() => removeMedication(medication.id)}
            >
            X
            </button>
            </span>
            </div>
            </li>
        </ul>
    )
}