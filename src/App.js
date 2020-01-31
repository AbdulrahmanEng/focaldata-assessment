import React from 'react';
import './App.css';

import SurveyList from './SurveyList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      surveys: [],
      selectedSurvey: 0
    }

    this.handleSelection = this.handleSelection.bind(this);
  }
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/focaldata/demo/db').then(res => res.json()).then(data => this.setState({surveys: data.surveys}))
  }
  handleSelection(e) {
    this.setState({selectedSurvey: e.target.value});
  }
  render() {
    const {surveys, selectedSurvey} = this.state;

    return (<div className="App">
      <div className="container">
      <h1 className="App__title">Surveys</h1>
        {
          surveys.length > 0
            ? <SurveyList surveys={surveys} selectedSurvey={selectedSurvey} handleSelection={this.handleSelection}/>
            : <div>Loading...</div>
        }
      </div>
    </div>);
  }
}

export default App;
