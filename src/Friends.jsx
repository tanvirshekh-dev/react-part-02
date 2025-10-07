import { use } from "react";
import Friend from "./Friend";

export default function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="card">
          <h3>Friend: {friends.length}</h3>
          {
              friends.map(friend => <Friend friend={friend}></Friend>)
          }
    </div>
  );
}
