export default function list(cntr) {
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