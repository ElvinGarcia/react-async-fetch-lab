import React from 'react';
import { Component } from 'react'

class App extends Component {
  state = {
    peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <p key={id}>Name: {person.name} Craft: {person.craft }</p>)}
      </div>
    )
  }

  componentDidMount() {
    const url ='http://api.open-notify.org/astros.json'
    fetch(url)
      .then(resp => resp.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }) )
  }


}
export default App;


