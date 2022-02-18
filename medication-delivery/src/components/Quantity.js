export default function Quantity(props) {
    return (
        <>
            <input type="number" value={props.medCount}></input>
            <select>
                <option value={props.duration}>weeks</option>
                <option value={props.duration}>months</option>
                <option value={props.duration}>years</option>
            </select>
        </>
        
    )
}