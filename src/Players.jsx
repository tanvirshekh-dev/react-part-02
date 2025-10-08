import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);
    
  return (
    <div className="card">
      <h3>Players {players.length}</h3>
      <div>
        <ol>
          {players.map((player) => (
            <li>Name: {player.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
