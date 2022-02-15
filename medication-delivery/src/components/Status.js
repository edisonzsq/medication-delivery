export default function Status(props) {
    
    setTimeout(()=> {
        return <tr>Processing...</tr>
    }, 3000)

    setTimeout(() => {
        return <tr>Your order is on the way!</tr>
    }, 5000)

    return (

    )
}