import React, {useState} from 'react';

export default function SelectMedication(props) {
    let orderedMed = {
        name: "",
        quantity: ""
    };
    const [med, setMed] = useState(orderedMed);
    const [number, setNumber] = useState("");
    const [duration, setDuration] = useState("");

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
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} style={{width: 10, padding: 5, marginRight: 10}} ></input>
            <select onChange={(e) => setDuration(e.target.value)} defaultValue={'default'} style={{padding: 5, marginRight: 10}} >
                <option value="default" hidden="hidden">Duration</option>
                <option value={duration}>weeks</option>
                <option value={duration}>months</option>
                <option value={duration}>years</option>
            </select>
        </div>
        <button className="Button" style={{position:"relative", left:150, bottom:90}}>Order</button>
        </form>
    )
}