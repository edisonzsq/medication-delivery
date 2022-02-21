import React, {useState} from 'react';

export default function Quantity(props) {
    const [number, setNumber] = useState("");
    const [duration, setDuration] = useState("");

    return (
        <span>
            <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} style={{width: 10, padding: 5, marginRight: 10}} ></input>
            <select onChange={(e) => setDuration(e.target.value)} defaultValue={'default'} style={{padding: 5, marginRight: 10}} >
                <option value="default" hidden="hidden">Duration</option>
                <option value={duration}>weeks</option>
                <option value={duration}>months</option>
                <option value={duration}>years</option>
            </select>
        </span>
        
    )
}