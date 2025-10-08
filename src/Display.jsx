import { useState } from "react"

export default
    function Display() {
    
    const [isDisplay, setIsDisplay] = useState(false);
    
    const handleToggle = () => {
        setIsDisplay(!isDisplay)
    }
    return (
        <div className="card">
            <h3>Some Text: </h3>
            {
                isDisplay && <h2>"Hello, react learner!"</h2>
            } 
            <div className="btn">
                <button onClick={handleToggle}>Show</button>
                <button onClick={handleToggle}>Hide</button>
            </div>
            
        </div>
    )
}