import React, { Component } from 'react';
import '../style/Intro.css';
import {NAME, BIO, EMAIL, SOCIALS} from '../constants';

class Intro extends Component {
	constructor(props) {
		super(props);
		this.renderSocialIcons = this.renderSocialIcons.bind(this);
	}

	renderSocialIcons() {
		return (
			SOCIALS.map(function(social) {
				return (
					<a className="SocialIcon"
						key={social.name}
						href={social.url}>
						<img src={social.icon_url} height="20" width="20"></img>
					</a>
				)
			})
		);
	}

  render() {
    return (
      <div className="IntroContainer">
      	<div className="IntroContent">
      		<div className="IntroHeader">
      			<div className="Name">
	      			<strong>{NAME}</strong>
	      		</div>
	      		<div className="SocialIconContainer">
	      			{this.renderSocialIcons()}
	      		</div>
      		</div>
      		<div className="IntroText">
      			{BIO} <a className="Link" href={'mailto:' + EMAIL}>{EMAIL}</a>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Intro;
