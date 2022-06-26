import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce} from 'lodash';
import './css/styles.css';
import fetchCountries from './JS/fetchCountries.js';
import control from './JS/control';
import list from './JS/listRender';
import card from './JS/cardRender';

const DELAY = 500;
const input = document.querySelector('#search-box');
const outList = document.querySelector('.country-list');
const outBox = document.querySelector('.country-info');

input.addEventListener('input', debounce(fun, DELAY));

function fun(event){
	let eName = event.target.value.trim();
	fetchCountries(eName,outBox,outList)//, outBox, outList
		.then(e => {control(e, list, card, outBox, outList)})
		.catch(error => console.log(error))
}


// function fetchCountries(name,reset1,reset2) {
// 	return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,name.official,flags`).then(response => {
// 		if (response.ok) {
// 			return response.json();
// 		}
// 		Notify.failure("Oops, there is no country with that name");
// 		reset1.innerHTML = ''; reset2.innerHTML = '';
// 		throw new Error(response.status);
// 	});
// };
//******* */
// function render(countries, many, one, inner, reset) {
// 	if(countries.length > 10) {
// 		console.log("countries", countries);
// 		return Notify.info("Too many matches found. Please enter a more specific name.");
// 	}
// 	if(countries.length !== 1) {
// 		many(countries, reset, inner);
// 	} else {
// 		one(countries, inner, reset);
// 	}
// }	

// function list(cntr) {
// 	outBox.innerHTML = '';
// 	const markup = cntr
// 		.map((cntr) => {
// 			return `<li class = "list">
// 			<div class = "list_flag">
// 				<img src=${cntr.flags.svg} alt="flag"/>
// 			</div>
// 				<p><b>${cntr.name.common}</b></p>
// 			</li>`;
// 		}).join("");
// 	outList.innerHTML = markup;
// }

// function card(cntr) {
// 	outList.innerHTML = '';
// 	const markup = cntr
// 	.map((cntr) => {
// 		const language = Object.values(cntr.languages);
// 		return `<ul>
// 			<li class = "box">
// 				<div class = "box_flag">
// 					<img src=${cntr.flags.svg} alt="flag"/>
// 				</div>
// 				<div class = "bolt"><b>${cntr.name.common}</b></div>
// 			</li>
// 			<li><p><b>Name official</b>: ${cntr.name.official}</p></li>
// 			<li><p><b>capital</b>: ${cntr.capital}</p></li>
// 			<li><p><b>population</b>: ${cntr.population}</p></li>
// 			<li><p><b>languages</b>: ${language}</p></li>
// 		</ul>`;
// 	}).join("");
// 	outBox.innerHTML = markup;
// }


// //******* */
// function renderList(countries) {
	
// 	if (countries.length > 10) {
// 		return Notify.info("Too many matches found. Please enter a more specific name.");
// 	}
// 	if (countries.length !== 1) { 
		
// 	outBox.innerHTML = '';
// 	const markup = countries
// 	.map((country) => {
// 		return `<li class = "list">
// 			<div class = "list_flag">
// 				<img src=${country.flags.svg} alt="flag"/>
// 			</div>
// 				<p><b>${country.name.common}</b></p>
// 			</li>`;
// 	})
// 	.join("");
// 		outList.innerHTML = markup;
// 	}
// 	else {
// 		outList.innerHTML = '';
// 		const markup = countries
// 			.map((country) => {
// 				const language = Object.values(country.languages);
				
// 			return `<ul>
// 			<li class = "box">
// 				<div class = "box_flag">
// 					<img src=${country.flags.svg} alt="flag"/>
// 				</div>
// 				<div class = "bolt"><b>${country.name.common}</b></div>
// 			</li>
// 			<li><p><b>Name official</b>: ${country.name.official}</p></li>
// 			<li><p><b>capital</b>: ${country.capital}</p></li>
// 			<li><p><b>population</b>: ${country.population}</p></li>
// 			<li><p><b>languages</b>: ${language}</p></li>
// 			</ul>`;
				
// 		}).join("");
// 	outBox.innerHTML = markup; 
// }
// }
