import React from 'react';
import {v4 as uuid} from 'uuid';

export default function OrderedMed(props) { 
    return(
        <div>
        {
            props.medicationList.filter(m=>m.name === props.name)
            .map((element)=>{
                return (
                    <li key={uuid()}>
                        <span>{JSON.stringify({element}).slice(1, -1)}</span>
                    </li>
                )
            })}
        </div>
    )
}

/*
<div>
        {
            medicationList.length > 0 ?
            medicationList.map(m => (
            <li key={uuid()}>
                <span>{JSON.stringify(m[0].name).slice(1, -1)}</span>
            </li>
        )) : (
                <li style={{listStyleType: "none"}}><span>No orders found</span></li>
        )
        }
        </div>
*/