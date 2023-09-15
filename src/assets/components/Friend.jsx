import Button from "./Button"

function Friend({ friend, onSelection, Selectedfriend }) {

  const isSelected = Selectedfriend.id === friend.id
  return (

    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && <p className="red">You own {friend.name} {Math.abs(friend.balance)}$</p>}
      {friend.balance > 0 && <p className="green">{friend.name} Owes you  {Math.abs(friend.balance)}$</p>}
      {friend.balance === 0 && <p>You and {friend.name} are even {Math.abs(friend.balance)}$</p>}
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>

  )
}

export default Friend