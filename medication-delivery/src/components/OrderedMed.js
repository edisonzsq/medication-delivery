import React from 'react';
import OrderList from './OrderList';
import Quantity from './Quantity';
import Status from './Status';

export default function OrderedMed(props) { 
    return(
        <>
            <td>OrderList</td>
            <td>Quantity</td>
            <td><Status /></td>
        </>
    )
}
