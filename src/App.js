import React, { Component } from 'react';
import Intro from './components/Intro';
import ProjectTable from './components/ProjectTable'

class App extends Component {
  render() {
    return (
    	<div>
	    	<Intro />
	    	<ProjectTable />
	    </div>
    );
  }
}

export default App;
