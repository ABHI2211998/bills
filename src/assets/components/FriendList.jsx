
import Friend from "./Friend"

function FriendList({ friends, onSelection, Selectedfriend }) {

  return (
    <ul>
      {friends.map(friend => <Friend friend={friend} key={friend.id} onSelection={onSelection} Selectedfriend={Selectedfriend} />)}
    </ul>
  )
}

export default FriendList