export default function card(cntr) {
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