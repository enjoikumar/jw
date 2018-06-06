import React, { Component } from 'react'
import Data from '../data.json';

// console.log(Data)

const innerButton = Data.results[0].data.button.text

function MiddleList(props) {
	return(
		<div>
			{props.name}
		</div>
	)
}


class Middle extends Component {
	render() {
		return (
			<div className="middle">
				<div>
					<p>Lorem ipsum dolor sit amer, consectetur adipiscing elit.</p>
				</div>

				<MiddleList 
					name={innerButton}
				/>
				<MiddleList 
					name={innerButton}
				/>
			</div>
		);
	}
}

export default Middle;