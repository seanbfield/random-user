import React from 'react';
import './App.css';
import UserSummary from './components/UserSummary';
import { fetchUser } from './services/randomCall';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }


  refreshUser = async (event) => {
    // event.preventDefault();
    const currentUser = await fetchUser(this.state.results);
    console.log(currentUser)
    this.setState((prevState) => ({
      currentUser: currentUser
    }))
  }

  componentDidMount() {
    this.refreshUser();
  }



  render() {

    return (

      <header className="App-header">
        <div onClick={this.refreshUser}>
          <UserSummary userData={this.state.currentUser} />
        </div>

      </header>

    );
  }
}

export default App;
