// Write your code here
import './index.css'

const Welcome = props => {
  const {message} = props
  return <h1 className="heading">{message}</h1>
}

Welcome.defaultProps = {message: 'Welcome User'}

export default Welcome
