import Button from "./Button"


function FormSplitbill({ Selectedfriend }) {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {Selectedfriend.name}</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🚹Your Expenise</label>
      <input type="text" />

      <label>👯‍♂️{Selectedfriend.name} Expenise</label>
      <input type="text" />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>{Selectedfriend.name} </option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitbill