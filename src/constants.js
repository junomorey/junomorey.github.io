import mixxtapeImg from './images/mixxtape.png';
import slcImg from './images/slc.png';
import ldImg from './images/ld.png';
import gitletImg from './images/gitlet.png'
import fubyImg from './images/fuby.png';
export const NAME = "Juno Morey"
export const BIO = "Software Engineer from the Bay Area looking for full time positions starting Fall 2018 and onwards. Email: "
export const EMAIL = "junoleemorey@gmail.com"
export const SOCIALS = [
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/juno-morey/",
		icon_url: "https://cdn1.iconfinder.com/data/icons/capsocial/500/linkedin2-512.png"
	},
	{
		name: "Github",
		url: "https://github.com/junomorey",
		icon_url: "https://cdn1.iconfinder.com/data/icons/capsocial/500/github-512.png"
	},
	{
		name: "Soundcloud",
		url: "https://soundcloud.com/junosjams",
		icon_url: "https://cdn1.iconfinder.com/data/icons/capsocial/500/soundcloud-512.png"
	}
]
export const PROJECTS = [
	{
		title: "Mixxtape",
		image: mixxtapeImg,
		description: "Built a Spotify playlist generator using ReactJS, Bootstrap, and the Spotify Web API. Allows users to instantly create a playlist that spells out an acrostic message using songs by specified artists",
		github: "https://github.com/junomorey/mixxtape",
		link: "https://mixxtape-server.herokuapp.com/login"
	},
	{
		title: "SLC App",
		image: slcImg,
		description: "Worked on a team of 5 developing a Rails App to automate the process of tutor/student pairing for the UC Berkeley Student Learning Center",
		github: "https://github.com/junomorey/slc-app",
		link: "https://slc-app.herokuapp.com/"
	},
	{
		title: "Procore L&D Site",
		image: ldImg,
		description: "Teamed with an engineer and a designer to design and build an MVP for the Procore Learning and Development's Informational Website using Sketch, ReactJS, and Bootsrap",
		link: "http://procore-learning.herokuapp.com/"
	},
	{
		title: "Fuby",
		image: fubyImg,
		description: "Developed a Student Course Forum with 3 other engineers using Rails, HTML5, CSS3, and Bootstrap"
		link: "http://fuby.herokuapp.com/"
	},
	{
		title: "Gitlet",
		image: gitletImg,
		description: "Paired with another engineer to architect a miniature replica of git run through the command line using Java",
		github: "https://github.com/junomorey/gitlet",
	}
]