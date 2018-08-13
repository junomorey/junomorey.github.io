import mixxtapeImg from './images/mixxtape.png';
import slcImg from './images/slc.png';
import ldImg from './images/ld.png';
import gitletImg from './images/gitlet.png'
import fubyImg from './images/fuby.png';
import portfolioImg from './images/portfolio.png';
export const NAME = "Juno Morey"
export const BIO = "Software Engineer from the Bay Area looking for full time positions starting Fall 2018 and onwards. You can see some of my projects below, and if you'd like to get in touch send me an email at "
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
		description: "Message-encoding Spotify playlist generator built using ReactJS, Bootstrap, and the Spotify Web API.",
		github: "https://github.com/junomorey/mixxtape",
		link: "https://mixxtape-server.herokuapp.com/login"
	},
	{
		title: "SLC App",
		image: slcImg,
		description: "Rails App to automate the process of tutor/student pairing for the UC Berkeley Student Learning Center.",
		github: "https://github.com/junomorey/slc-app",
		link: "https://slc-app.herokuapp.com/"
	},
	{
		title: "Procore L&D Site",
		image: ldImg,
		description: "MVP Informational Website for the Procore Learning and Development Department. Designed/built with Sketch, ReactJS, and Bootstrap.",
		link: "http://procore-learning.herokuapp.com/"
	},
	{
		title: "Fuby",
		image: fubyImg,
		description: "Rails app that serves as a platform for University students to review courses.",
		link: "http://fuby.herokuapp.com/"
	},
	{
		title: "Gitlet",
		image: gitletImg,
		description: "Miniature replica of git run through the command line built with Java.",
		github: "https://github.com/junomorey/gitlet",
	},
	{
		title: "Personal Website",
		image: portfolioImg,
		description: "Created using ReactJS, HTML5, CSS3, and Bootstrap.",
		github: "https://github.com/junomorey/portfolio",
	}
]