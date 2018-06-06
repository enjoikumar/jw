import React, { Component } from 'react';
import Data from '../data.json';

console.log(Data)


// console.log(Data.results[0].data.header_group[0].icon.url)
// console.log(Data.results[0].data.hero_image.url)

// console.log(Data.results[0].data.body[0].items[0].feature_description[0].text)

class HeroImage extends Component {
	render() {
		return (
			<div>
				<img src={Data.results[0].data.hero_image.url}/>
			</div>
		);
	}
}

export default HeroImage;


