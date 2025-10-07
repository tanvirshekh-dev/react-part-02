import { useState } from "react"

export default 
    function Bowler({name}) {
    
    const [ball, setBall]= useState(0)
    const handleBall = () => {
        const newBallCount = ball + 1;
        setBall(newBallCount)
    }

    return (
        <div>
            <p>Bowler Name: {name}</p>
            {
                ball < 6 ? "" : <p>Your Over is done 🪐</p>
            }
            <p>Ball count: {ball}</p>
            <button onClick={handleBall}>Ball</button>
        </div>
    )
}