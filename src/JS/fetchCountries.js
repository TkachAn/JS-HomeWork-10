export default function fetchCountries(name) {
	return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,name.official,flags`).then(response => {
		if (response.ok) {
			return response.json();
		}
		Notify.failure("Oops, there is no country with that name");
		outList.innerHTML = ''; outBox.innerHTML = '';
		throw new Error(response.status);
	});
};