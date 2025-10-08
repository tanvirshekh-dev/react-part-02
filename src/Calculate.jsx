import { useState } from "react"

export default
    function Calculate() {
    
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
        const addCountNumber = count + 1;
        setCount(addCountNumber);
    }

    const handleRemove = () => {
        const removeCountNumber = count - 1;
        setCount(removeCountNumber);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="card">
            <h3>Count Number: {count}</h3>
            <div className="btn">
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleRemove}>-1</button>
                <button onClick={handleReset}>Reset</button> 
            </div>
        </div>
    )
}