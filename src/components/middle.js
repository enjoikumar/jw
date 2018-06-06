import React, { Component } from 'react'
import Data from '../data.json';

const heading4 = Data.results[0].data.body[0].primary.features_header[0].text;

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
					<p>{heading4}</p>
				</div>

				<MiddleList 
				/>

			</div>
		);
	}
}

export default Middle;


// console.log(Data)

// console.log(Data.results[0].data.body[0].primary.features_header[0].text)

// const innerButton = Data.results[0].data.button.text