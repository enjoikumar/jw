import React, { Component } from 'react';
import Data from '../data.json';

console.log(Data)


console.log(Data.results[0].data.header_group[0].icon.url)
console.log(Data.results[0].data.body[0].items[0].feature_description[0].text)

class Center extends Component {
	render() {
		return (
			<div>
			{Data.results[0].data.body[0].items[0].feature_description[0].text}
			</div>
		);
	}
}

export default Center;


