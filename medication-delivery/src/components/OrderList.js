import React from 'react';
import {v4 as uuid} from 'uuid';

export default function OrderList(props) { 
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
