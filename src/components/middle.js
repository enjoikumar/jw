import React, { Component } from 'react'
import Data from '../data.json';

const heading4 = Data.results[0].data.body[0].primary.features_header[0].text;

const item1 = Data.results[0].data.body[0].items[0]


function MiddleList(props) {
	return(
		<div className={props.class}>
			<p className="title">{props.title}</p>
			<p className="bio">{props.bio}</p>
			<p className="best">{props.best}</p>

			<p className="list">
				<li>{props.list1}</li>
				<li>{props.list2}</li>
			</p>

			<button>
				<a href={props.urls}>{props.button}</a>
			</button>
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
					class="section1"
					title = {item1.feature_title[0].text}
					bio = {item1.feature_description[0].text}
					best = {item1.list_header[0].text}
					list1 = {item1.list[0].text}
					list2 = {item1.list[1].text}
					urls = {item1.button.url}
					button = {item1.button.text}
				/>

			</div>
		);
	}
}

export default Middle;


// console.log(Data)

// console.log(Data.results[0].data.body[0].primary.features_header[0].text)

// const innerButton = Data.results[0].data.button.text

// console.log(Data.results[0].data.body[0].items[0].feature_title[0].text)
