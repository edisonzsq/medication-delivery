import React from 'react';
import Status from './Status';

export default function OrderedMed(props) { 
    const {addMed} = props;
    return(
        <>
        {
            props.med.map(order => {
                return(
                    <>
                    <td>{order.med}</td>
                    <td>{order.number} {order.duration}</td>
                    </>
                )
            })
        }
            <td><Status /></td>
        </>
    )
}