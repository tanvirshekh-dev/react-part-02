import { useState } from "react"

export default 
    function Batsmen() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    
    const handelSingle = () => {
        const updatedRun = runs + 1;
        setRuns(updatedRun)
    }

    const handelFour = () => {
        const updatedRun = runs + 4;
        setRuns(updatedRun)
    }

     const handelSix = () => {
         const updatedRun = runs + 6;
         const updateSixes = sixes + 1;
         setRuns(updatedRun)
         setSixes(updateSixes)
    }

    return (
        <div>
            <h3>Player: Bangladesh</h3>

            {
                runs > 50 && runs <= 100 ? <p>Your score is: 50</p> : ""
            }
            {
                runs > 100 && <p>Your score is: 100</p>
            }
            
            <p>Sixes: {sixes}</p>
            <h2>Runs: {runs}</h2>
            <button onClick={handelSingle}>Single</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}