import API from '../api/api';

export default function SelectMedication() {
    const [select, setSelect] = useState([]);

    const handleInput = event => {
        API.get("/medication").then((res) => {
            console.log("Status", res.status);
            console.log("Data", res.data)
            setSelect([...select, res.data])

            const newMed = {...medication};
            newMed.name = event.target.value;
            console.log("newMed", newMed);
        })
    }

    return (
        <select name="name"
                id="nameInput"
                placeholder="e.g. Amlodipine 10mg OD"
                value={medication.name}
                onChange={handleInput}
                className="Input">
            <option value="option1" 
                    key={medication.id}>
                {JSON.stringify(medication[0].name).slice(1, -1)}
            </option>
            <option value="option2" 
                    key={medication.id}>
                {JSON.stringify(medication[1].name).slice(1, -1)}
            </option>
            <option value="option3" 
                    key={medication.id}>
                {JSON.stringify(medication[2].name).slice(1, -1)}
            </option>
            <option value="option4" 
                    key={medication.id}>
                {JSON.stringify(medication[3].name).slice(1, -1)}
            </option>
            <option value="option5" 
                    key={medication.id}>
                {JSON.stringify(medication[4].name).slice(1, -1)}
            </option>
            <option value="option6" 
                    key={medication.id}>
                {JSON.stringify(medication[5].name).slice(1, -1)}
            </option>
            <option value="option7" 
                    key={medication.id}>
                {JSON.stringify(medication[6].name).slice(1, -1)}
            </option>
            <option value="option8" 
                    key={medication.id}>
                {JSON.stringify(medication[7].name).slice(1, -1)}
            </option>
            <option value="option9" 
                    key={medication.id}>
                {JSON.stringify(medication[8].name).slice(1, -1)}
            </option>
        </select>
    )
}