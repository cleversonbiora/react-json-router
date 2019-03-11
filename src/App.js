import React, { Component } from 'react';
import {DynamicPage} from 'react-json-page';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { jsonPage: {"type":"h4","value":"Carregando..."} };

    this.loadJson(this.props.location);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location && (this.props.location.pathname !== prevProps.location.pathname || this.props.location.search !== prevProps.location.search)) {
      this.loadJson(this.props.location);
    }
  }

  loadJson(location){
    fetch("http://localhost:49794/v1/Page", { method: 'POST', headers:{"Content-Type":"application/json"}, body: JSON.stringify(location) })
          .then(response => response.json())
          .then(data => {
            if(!data)
              return;
            this.setState({ jsonPage: data.data.body });
            document.title = data.data.title;
          });
  }

  render() {
    const Components = {
      Link
    };
    return (
      <div className="App">
          <DynamicPage form={this.state.jsonPage} customComponents={Components} />
      </div>
    );
  }
}

export default App;
