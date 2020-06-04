import React from 'react';
import './App.css';
import earth from './earth512.png';
import github from './github512.png';
import handshake from './handshake512.png';
import linked from './linked512.png';
import 'tachyons';

class App extends React.Component {
	constructor() {
		super();
		this.state= {}
	}

	render() {
		return (
			<div className="App">
				<div className="App-body">
				<h1>Hello. My name is Magnus!<hr/></h1>
					<h2 className='w-80'>I am a Web Developer from San Antonio and am currently studying Computer Science at the University of Texas at San Antonio.</h2>
					<h2 className='w-80'>I have taken the Zero to Mastery: Web Developer in 2020 course, and have worked with HTML, CSS, Javascript, Node, React, Back-End Development, Databases, and deploying projects.</h2>
					<h2 className='w-80'>Below are some of the projects I have worked on!</h2>
					<h1><hr/>Contact Information</h1>
				</div>
				<div className="App-footer">
					<div className="contact">
						<img className='grow pa2 h3 w3' src={linked} alt='' />
						<img className='grow pa2 h3 w3' src={github} alt='' />
						<img className='grow pa2 h3 w3' src={handshake} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
