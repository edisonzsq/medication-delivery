import React from 'react';
import {uniqueId} from 'lodash';

export default function MedicationList(props) { 
    const {medicationList} = props;
    return(
        <div>
        {
            medicationList.length > 0 ?
            medicationList.map(m => (
            <li key={uniqueId('a')}>
                <span>{JSON.stringify(m[0].name).slice(1, -1)}</span>
            </li>
        )) : (
                <li style={{listStyleType: "none"}}><span>No orders found</span></li>
        )
        }
        </div>
    )
}
//filter and map