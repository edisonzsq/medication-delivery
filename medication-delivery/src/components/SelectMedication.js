import React, {useState} from 'react';

export default function SelectMedication(props) {
    const {addMed} = props;
    let defaultMedState = {
        name: "default", // Use null to indicate that value is not initialized yet.
        quantity: 0,
        duration:"default"
    };
    const [med, setMed] = useState("");
    const [number, setNumber] = useState("");
    const [duration, setDuration] = useState("");

    const [order, setOrder] = useState(defaultMedState);

    const handleInput = event => {
        const {name, value} = event.target;
        console.log("handleInput", {...order, [name]: value});
        setOrder({...order, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Use the library joi for a neater validation (link: https://www.npmjs.com/package/joi)
        if(order.name === defaultMedState.name || order.quantity === defaultMedState.quantity || order.duration === defaultMedState.duration){
            alert("Input validation failed");
            return;
        }
        addMed(order);
        setOrder(defaultMedState);
    }

    return (
        <form onSubmit={handleSubmit}>
        <select name={"name"}
                id="nameInput"
                defaultValue={'default'}
                className="Input"
                value={order.name}
                onChange={handleInput}>
                    <option key={"default"} value="default">Choose medication</option>
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
            {/* Give quantity input a name call "quantity", aligned with your default initialized order object. */}
            <input type="tel" name={"quantity"} value={order.quantity} onChange={handleInput} style={{width: 10, padding: 5, marginRight: 10}} ></input>
            <select name={"duration"} onChange={handleInput} value={order.duration} defaultValue={'default'} style={{padding: 5, marginRight: 10}} >
                <option value="default" hidden="hidden">Duration</option>
                <option>weeks</option>
                <option>months</option>
            </select>
        </div>
        <button className="Button" style={{position:"relative", left:140, bottom:87}}>Order</button>
        </form>
    )
}