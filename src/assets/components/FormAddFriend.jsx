import Button from "./Button"
import { useState } from "react"

function FormAddFriend({ addfriend }) {
  const [Name, setName] = useState('')
  const [Image, setImages] = useState('https://i.pravatar.cc/48')



  function handleSubmit(e) {
    e.preventDefault();
    if (!Name) return
    const id = crypto.randomUUID();

    const newfriend = {
      id,
      Name,
      images: `${Image}?=${id}`,
      balance: 0,

    }
    addfriend(newfriend)

    setName('')
    setImages('')
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label >👬 Friend Name</label>
      <input type="text" value={Name} onChange={(e) => setName(e.target.value)}></input>

      <label >🌆 Image Url</label>
      <input type="text" value={Image} onChange={(e) => setImages(e.target.value)}></input>

      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend

// className="label"className="input"