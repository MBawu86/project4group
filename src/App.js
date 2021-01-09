import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

    }
  }

  componentDidMount() {
    
    fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

    return (
      <div className= "App">
        <header className="App-header">
          <h1>Jeopardy! App </h1>
        </header>

          <ul>
            {items.map(item => (
              <li key={item.id}>
                Answer: {item.answer} |
                Question: {item.question}
              </li>

            ))};
          </ul>
      </div>
    );
  }

}

} 



export default App;
