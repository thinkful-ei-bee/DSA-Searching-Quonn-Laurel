import React from 'react';
import Form from "./Components/Form/Form";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    
    event.preventDefault();
    alert(this.state.value);
  }

  render() {
    return (
      <Form submit={this.handleSubmit}></Form>
    );
  }

}

export default App;
