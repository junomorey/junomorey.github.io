import React, { Component } from 'react';
import '../style/Projects.css';

class ProjectTable extends Component {
	constructor(props) {
		super(props);
		this.renderGithubLink = this.renderGithubLink.bind(this);
		this.renderSiteLink = this.renderSiteLink.bind(this);
	}

	renderGithubLink() {
		if (this.props.github) {
			return (<a href={this.props.github} className="card-link">Code</a>);
		}
	}

	renderSiteLink() {
		if (this.props.link) {
			return (<a href={this.props.link} className="card-link">Live App</a>);
		}
	}

 	render() {
   		return (
   			<div className="ProjectItem">
    		<div className="card" width='50'>
			 	<img className="card-img-top" src={this.props.image} alt="Card image cap" />
			 	<div className="card-body">
				   	<h5 className="card-title">{this.props.title}</h5>
				    <p className="ProjectDescription">{this.props.description}</p>
				    {this.renderGithubLink()}
				    {this.renderSiteLink()}
				 </div>
			</div>
			</div>
    	);
  	}
}

export default ProjectTable;
