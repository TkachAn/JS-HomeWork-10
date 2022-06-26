import { Notify } from 'notiflix/build/notiflix-notify-aio';
//import { debounce} from 'lodash';
export default function control(countries, many, one, inner, reset) {
	if(countries.length > 10) {
		console.log("countries", countries);
		return Notify.info("Too many matches found. Please enter a more specific name.");
	}
	if(countries.length !== 1) {
		many(countries, reset, inner);
	} else {
		one(countries, inner, reset);
	}
}	
