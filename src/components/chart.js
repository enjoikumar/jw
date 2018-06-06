import React, { Component } from 'react';
import Data from '../data.json';

console.log(Data)

function ChartData(props) {
	return(
		<div className={props.class}>
			<img src={props.url}/>
			<p src={props.heading}></p>
			<p src={props.para}></p>
		</div>
	)
}

class Chart extends Component {
	render() {
		return(
			<div>
			This is where the final portion would go

			<ChartData />
			</div>
		)
	}
}

export default Chart;