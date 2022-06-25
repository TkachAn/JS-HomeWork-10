import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce, functionsIn } from 'lodash';
import './css/styles.css';
//import { list } from './JS/listRender.js';
//import { card } from './JS/card.js';
//import './JS/fetchCountries.js';
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
//const input = document.getElementsById('search-box');
const outList = document.querySelector('.country-list');
const outBox = document.querySelector('.country-info');

input.addEventListener('input', (event) => {//(event) => {//debounce((event) => {//
	let eName = event.currentTarget.value;
	console.log("trim before", eName);
	eName = eName.trim();//debounce(e.trim(), 1000);//
	console.log("trim after", eName);
	fetchCountries(eName)
		.then(e => {render(e,list,card)})//renderList(e)
		.catch(error => console.log(error))
});////});//

function fetchCountries(name) {
	return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,name.official,flags`).then(response => {
		if (response.ok) {
			return response.json();
		}
		Notify.failure("Oops, there is no country with that name");
		outList.innerHTML = ''; outBox.innerHTML = '';
		throw new Error(response.status);
	});
};
//******* */
function render(countries, many, one) {
	if(countries.length > 10) {
		console.log("countries", countries);
		return Notify.info("Too many matches found. Please enter a more specific name.");
	}
	if(countries.length !== 1) {
		many(countries);
	} else {
		one(countries);
	}
}	

function list(cntr) {
	outBox.innerHTML = '';
	const markup = cntr
		.map((cntr) => {
			return `<li class = "list">
			<div class = "list_flag">
				<img src=${cntr.flags.svg} alt="flag"/>
			</div>
				<p><b>${cntr.name.common}</b></p>
			</li>`;
		}).join("");
	outList.innerHTML = markup;
}

function card(cntr) {
	outList.innerHTML = '';
	const markup = cntr
	.map((cntr) => {
		const language = Object.values(cntr.languages);
		return `<ul>
			<li class = "box">
				<div class = "box_flag">
					<img src=${cntr.flags.svg} alt="flag"/>
				</div>
				<div class = "bolt"><b>${cntr.name.common}</b></div>
			</li>
			<li><p><b>Name official</b>: ${cntr.name.official}</p></li>
			<li><p><b>capital</b>: ${cntr.capital}</p></li>
			<li><p><b>population</b>: ${cntr.population}</p></li>
			<li><p><b>languages</b>: ${language}</p></li>
		</ul>`;
	}).join("");
	outBox.innerHTML = markup;
}


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

// function renderCountry(countries) {
//   const markup = countries
//     .map((country) => {
//       return `<ul>
//           <li><b>Name official</b>: ${country.name.official}</li>
//           <li><b>capital</b>: ${country.capital}</li>
//           <li><b>population</b>: ${country.population}</li>
//           <li><b>Name</b>: ${country.name.common}</li>
//           <li><b>flag</b>: ${country.flags.svg}</li>
// 			 <li><b>languages</b>: ${country.languages}</li>
// 			</ul>`;
//     })
//     .join("");
//   outBox.innerHTML = markup;
// }

// function cardCountry(cntr) {
// 	`<ul>
// 		<li class = "box">
// 			<div class = "box_flag">
// 				<img src=${cntr.flags.svg} alt="flag"/>
// 			</div>
// 			<div class = "bolt">
// 				<b>${cntr.name.common}</b>
// 			</div>
// 		</li>
// 		<li>
// 			<p><b>Name official</b>: ${cntr.name.official}</p>
// 		</li>
// 		<li>
// 			<p><b>capital</b>: ${cntr.capital}</p>
// 		</li>
// 		<li>
// 			<p><b>population</b>: ${cntr.population}</p>
// 		</li>
// 		<li>
// 			<p><b>languages</b>: ${Object.values(cntr.languages)}</p>
// 		</li>
// 	</ul>`;
// }	
// input.addEventListener('input', (event) => {//debounce( ,300)
// 	let e = event.currentTarget.value;
//    const prom = new Promise((resolve, reject) => {
  // Asynchronous operation
//})
// 	console.log("trim before", e);
// 	e = e.trim();//debounce(e.trim(), 1000);//
// 	console.log("trim after", e);
// 	return e;
// 	
// }).fetchCountries(e)
// 		.then(e => {renderList(e)})
// 		.catch(error => console.log(error))
