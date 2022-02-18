export default function Quantity(props) {
    return (
        <>
            <input type="tel" value={props.medCount} style={{width: 10, padding: 5, marginRight: 10}} ></input>
            <select  style={{padding: 5, marginRight: 10}}>
                <option value="" selected="selected" hidden="hidden">Duration</option>
                <option value={props.duration}>weeks</option>
                <option value={props.duration}>months</option>
                <option value={props.duration}>years</option>
            </select>
        </>
        
    )
}