import React from 'react';
import OrderList from './OrderList';
import Quantity from './Quantity';
import Status from './Status';

export default function OrderedMed(props) { 
    const {addItem} = props;
    return(
        <>
            <td>OrderList</td>
            <td>Quantity</td>
            <td><Status /></td>
        </>
    )
}
/*
{props.medQuantity.map(quantity => {
     return <td>{quantity.number} {quantity.duration}</td>
})}
*/