import { useState } from "react"

export default
    function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd =()=> {
        // setCount(23)
        const newCount = count + 1;
        setCount(newCount)
    }
    
    const countStyles = {
        border: '2px solid yellow',
        margin: '30px',
        padding: '40px 0px'
    }
    return (
        <div style={countStyles}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}