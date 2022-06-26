import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default function fetchCountries(name, reset1, reset2) {
	return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,name.official,flags`).then(response => {
		if (response.ok) {
			return response.json();
		}

		console.log("response.status", response.status);
		if (response.status === 500) {
			Notify.failure("Oops, there is no country with that name");
		}
		reset1.innerHTML = '';
		reset2.innerHTML = '';
		throw new Error(response.status);
	});
}
