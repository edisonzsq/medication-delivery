export default function Quantity() {
    return (
        <>
            <input type="number" value={medCount}></input>
            <select>
                <option value={duration}>weeks</option>
                <option value={duration}>months</option>
                <option value={duration}>years</option>
            </select>
        </>
        
    )
}