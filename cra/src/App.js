import React from 'react';
import './App.css';
import axios from 'axios'
import NewUser from './NewUser'
import {Button, Container, SmallContainer} from './styles'


class App extends React.Component{
 
  state={
    users: { },
    followers: [],

    // For input and button: 
    userText: ''
  }

  // Component Mounts:////////////////////////////
  componentDidMount(){
    axios.get('https://api.github.com/users/MartaKode')

    .then(res => {
      // debugger
      console.log(res.data)
    
     
      this.setState({
        users: {  ...res.data}
      })

    })
   
    .catch( err => {
      debugger
    })

    // Axios call for a user's follower's :

    axios.get('https://api.github.com/users/MartaKode/followers')
.then( res => {
  console.log(res)
  this.setState({
    followers: res.data
  })
})

.catch(err=> {
  debugger
})

  }//end of cDM


  //  Helper Functions: ///////////
  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  };

  
  fetchUser = () => {
let username = this.state.userText

axios.get(`https://api.github.com/users/${username}`)

.then( res => {
  this.setState({
    users: {...res.data}
  })
})

axios.get(`https://api.github.com/users/${username}/followers`)

.then( res => {
  this.setState({
    followers: res.data
  })
})

  }


  render(){

    console.log(this.state.users)
  return (
    <div className="App">
      <header className="App-header">
   
<h1>Hello User!</h1>
<input 
type='text'
value={this.state.userText}
onChange={this.handleChanges}
/>
<Button onClick={this.fetchUser}>Fetch User</Button>


{/* <h3>Name: {this.state.users.login}</h3>
<img src={this.state.users["avatar_url"]} />
  <p>Followers: {this.state.users.followers}</p> */}
<Container>
  
<NewUser users={this.state.users} />

</Container>



{this.state.followers.map( follower => {
  return (
    <SmallContainer>
    <div key={follower.id}>
     <h4>Following {this.state.users.login}:</h4>
     <h3> {follower.login}</h3> 
      <img src={follower['avatar_url']} />
      <p>github: {follower['html_url']}</p>
    </div>
    </SmallContainer>
  )
})}




      </header>
    </div>
  );
}
}

export default App;


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/