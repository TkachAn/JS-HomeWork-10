export default function card(country, inner, reset) {
	reset.innerHTML = '';
	const markup = country
	.map((country) => {
		const language = Object.values(country.languages);
		return `<ul>
			<li class = "box">
				<div class = "box_flag">
					<img src=${country.flags.svg} alt="flag"/>
				</div>
				<div class = "bolt"><b>${country.name.common}</b></div>
			</li>
			<li><p><b>Name official</b>: ${country.name.official}</p></li>
			<li><p><b>capital</b>: ${country.capital}</p></li>
			<li><p><b>population</b>: ${country.population}</p></li>
			<li><p><b>languages</b>: ${language}</p></li>
		</ul>`;
	}).join("");
	inner.innerHTML = markup;
};
//export { card }