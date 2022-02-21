import React, {useState, useEffect} from 'react';
import Quantity from './Quantity';
import { v4 as uuid } from 'uuid';

export default function SelectMedication(props) {
    let orderedMed = {
        name: "",
        quantity: ""
    };
    const [med, setMed] = useState(orderedMed);

    const handleInput = event => {
        const {name, value} = event.target
        setMed({...med, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const orderDetails = {
            name: props.data.name,
            quantity: props.medCount
        }

        orderedMed = orderDetails;
        props.addMed(med);
        setMed(orderedMed);
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="name"
                id="nameInput"
                defaultValue={'default'}
                value={props.data.name}
                className="Input"
                onChange={handleInput}>
            {props.data.map((element) => {
                return (
                    <>
                    <option value="default" hidden="hidden">Choose medication</option>
                    <option key={element.id}>
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