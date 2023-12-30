// Write your code here
import './index.css'
import {Component} from 'react'
import Welcome from '../Message'
import LogIn from '../Login'
import LogOut from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onChange = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {isLoggedIn ? <Welcome /> : <Welcome message="Please Login" />}
          {isLoggedIn ? (
            <LogOut buttonText="Logout" eventText={this.onChange} />
          ) : (
            <LogIn greeting="Login" changeText={this.onChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
