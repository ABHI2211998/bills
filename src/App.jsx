import Button from './assets/components/Button'
import FormAddFriend from './assets/components/FormAddFriend'
import FormSplitbill from './assets/components/FormSplitbill'
import FriendList from './assets/components/FriendList'
import { useState } from 'react'
import initialFriends from './assets/components/Data'

function App() {
  //lift up state
  const [friends, setfriends] = useState(initialFriends)

  //show aur hide compoment formaddfriend
  const [Showaddfriend, setShowaddfriend] = useState(false)


  //select pe click se new com show krne ke liye
  const [Selectedfriend, setSelectedfriend] = useState(null)

  function handleshowaddfriend() {
    setShowaddfriend(Showaddfriend => !Showaddfriend)
  }

  function handleaddfriend(friend) {
    setfriends(friends => [...friends, friend])
    setShowaddfriend(false)
  }

  function handleSelection(friend) {
    // setSelectedfriend(friend)
    setSelectedfriend(selected => selected.id === friend.id ? null : friend)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelection} Selectedfriend={Selectedfriend} />

        {Showaddfriend && <FormAddFriend addfriend={handleaddfriend} />}

        <Button onClick={handleshowaddfriend}>{Showaddfriend ? 'Close' : 'Add Friend'}</Button>
      </div>

      {Selectedfriend && <FormSplitbill Selectedfriend={Selectedfriend} />}
    </div>
  )
}

export default App