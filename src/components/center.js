import React, { Component } from 'react';
import Data from '../data.json';

import HeroImage from './hero';

// console.log(Data)


// console.log(Data.results[0].data.header_group[0].icon.url)
// console.log(Data.results[0].data.body[0].items[0].feature_description[0].text)

class Center extends Component {
	render() {
		return (
			<div className="vIcon">
				<img src={Data.results[0].data.header_group[0].icon.url} />
				<p>LOREM IPSUM</p>
				<p className="biLine">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<HeroImage />
			</div>
		);
	}
}

export default Center;


