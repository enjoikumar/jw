import React, { Component } from 'react'
import Data from '../data.json';

// console.log(Data)

const innerButton = Data.results[0].data.button.text

function MiddleList(props) {
	return(
		<div>
			<p>{props.title}</p>
			<p>{props.bio}</p>
			<p>{props.best}</p>
			<p>{props.info}</p>
			<button>{props.button}</button>
		</div>
	);
}


class Middle extends Component {
	render() {
		return (
			<div className="middle">
				<div>
					<p>Lorem ipsum dolor sit amer, consectetur adipiscing elit.</p>
				</div>

				<MiddleList 
				/>

			</div>
		);
	}
}

export default Middle;