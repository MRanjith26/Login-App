// Write your code here
import './index.css'

const LogIn = props => {
  const {greeting, changeText} = props
  return (
    <button className="button" type="button" onClick={changeText}>
      {greeting}
    </button>
  )
}

export default LogIn
