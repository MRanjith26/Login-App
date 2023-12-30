// Write your code here
import './index.css'

const LogOut = props => {
  const {buttonText, eventText} = props
  return (
    <button className="button" type="button" onClick={eventText}>
      {buttonText}
    </button>
  )
}

export default LogOut
