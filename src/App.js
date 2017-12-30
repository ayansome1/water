import React, {
  Component
} from 'react'
import GoogleLogin from 'react-google-login'

import './App.css'

class App extends Component {
  render () {
    const responseGoogle = (response) => {
      console.log(response)
    }
    return (
      <GoogleLogin
        clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    )
  }
}

export default App
