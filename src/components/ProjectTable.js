import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import '../style/Projects.css';
import {PROJECTS} from '../constants';

class ProjectTable extends Component {
	constructor(props) {
		super(props);
		this.renderProjects = this.renderProjects.bind(this);
	}

	renderProjects() {
		return (
			PROJECTS.map(function(projectData) {
				return (
					<ProjectItem
						key={projectData.title}
						image={projectData.image}
						title={projectData.title}
						description={projectData.description}
						github={projectData.github}
						link={projectData.link}
					/>
				);
			})
		);
	}

 	render() {
   		return (
    		<div className="ProjectTable">
  				{this.renderProjects()}
      		</div>
    	);
  	}
}

export default ProjectTable;
