import React, {useState, useEffect} from 'react';
import Quantity from './Quantity';
import { v4 as uuid } from 'uuid';

export default function SelectMedication(props) {
    let orderedMed = {
        name: "",
        quantity: 0
    };

    const handleSubmit = () => {
        const orderDetails = {
            name: props.data.name,
            quantity: props.medCount
        }

        orderedMed = orderDetails;
        props.addToList(orderedMed);
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="name"
                id="nameInput"
                defaultValue={'default'}
                className="Input">
            {props.data.map((element) => {
                return (
                    <>
                    <option value="default" hidden="hidden">Choose medication</option>
                    <option key={uuid}>
                        {element.name}
                    </option>
                    </>
                        )
                    })}
        </select>
        <button className="Button">Order</button>
        <div style={{padding: 15}}>
            <Quantity />
        </div>
        </form>
    )
}