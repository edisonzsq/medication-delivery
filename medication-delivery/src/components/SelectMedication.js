import React, {useState} from 'react';

export default function SelectMedication(props) {
    const {addMed} = props;
    let orderedMed = {
        name: "",
        quantity: ""
    };
    const [med, setMed] = useState("");
    const [number, setNumber] = useState("");
    const [duration, setDuration] = useState("");

    const [order, setOrder] = useState(orderedMed);

    const handleInput = event => {
        const {name, value} = event.target;
        setOrder({...order, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addMed(order);
        setOrder(orderedMed);
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name="name"
                id="nameInput"
                defaultValue={'default'}
                className="Input"
                value={order.med}
                onChange={handleInput}>
                    <option key={"default"} value="default" hidden="hidden">Choose medication</option>
                    {
                        props.data.map((element) => {                
                            return (                       
                                <option key={element.id}>
                                    {element.name}
                                </option>
                            )
                        })
                    }
        </select>
        <div style={{padding: 15}}>
            <input type="tel" value={order.number} onChange={handleInput} style={{width: 10, padding: 5, marginRight: 10}} ></input>
            <select onChange={handleInput} value={order.duration} defaultValue={'default'} style={{padding: 5, marginRight: 10}} >
                <option value="default" hidden="hidden">Duration</option>
                <option>weeks</option>
                <option>months</option>
                <option>years</option>
            </select>
        </div>
        <button className="Button" style={{position:"relative", left:140, bottom:87}}>Order</button>
        </form>
    )
}