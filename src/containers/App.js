import React from 'react';
import './App.css';
import 'tachyons';
import {contents} from './contents.js';
import mail from './mail512.png';
import github from './github512.png'
import handshake from './handshake512.png';
import linked from './linked512.png';
import utsa from './utsa.jpg';
import ztm from './zerotomastery.jpg';

class App extends React.Component {
	constructor() {
		super();
		this.state= {}
	}

	render() {
		return (
			<div className="App">
				<div className="App-body">
					<h1 className='w-100'>Hello. My name is Magnus!<hr/></h1>
					<img className='w-60 grow br3' onClick={() => window.open('https://www.utsa.edu/', '_blank')} src={utsa} alt='utsa' />
					<h2 className='w-80'>I am a Web Developer from San Antonio and am currently studying Computer Science at the University of Texas at San Antonio. Below are some of the projects I have worked on!</h2>
					<div className='contents'>
						{
							contents.map((content, i) => {
								return (
									<div className='tc bg-navy pa2 dib size br4 ma3 mw6 fade-in shadow-5'>
										<img onClick={() => window.open(contents[i].link, '_blank')}src={contents[i].image} alt='' className='grow pa2 h5 w5'/>
										<div>
											<h1 className='b white'>{contents[i].name}</h1>
											<p className='b white fontsize'>{contents[i].about}</p>
										</div>
									</div>
								);
							})
						}
					</div>
					<h2 className='w-80'>I have taken the "Complete Web Developer in 2020: Zero to Mastery" course from Andrei Neagoie, and have worked with HTML, CSS, Javascript, Node, React, Back-End Development, and Databases.</h2>
					<img className='w-60 grow br3' onClick={() => window.open('https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/', '_blank')} src={ztm} alt='ztm' />
					<h2 className='w-90'><hr/>If you are looking for someone with passion for their work, and an eagerness to learn new things, consider hiring me for your next assignment!</h2>
					<div className="contact">
						<h1 className='w-100'>Contact Information<hr/></h1>
						<img className='grow pa3 h3 w3' src={github} alt='' onClick={() => window.open('https://github.com/magpiet', '_blank')}/>
						<img className='grow pa3 h3 w3' src={handshake} alt='' onClick={() => window.open('https://utsa.joinhandshake.com/users/19562943', '_blank')}/>
						<img className='grow pa3 h3 w3' src={linked} alt='' onClick={() => window.open('https://www.linkedin.com/in/magnus-cromwell-517b59191/', '_blank')}/>
						<a href="mailto:fluteboy269149@gmail.com">
							<img className='grow pa3 h3 w3' src={mail} alt='' />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
