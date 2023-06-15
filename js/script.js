const projects = [
	{
		name: "QR-CODE",
		img: "qr-code.png",
		website: "https://victorzlldev.github.io/QR-Code/",
		repository: "https://github.com/victorzllDev/QR-Code",
		ling:['html', 'css', 'javascript']
	},
	{
		name: "QR-CODE",
		img: "qr-code.png",
		website: "https://victorzlldev.github.io/QR-Code/",
		repository: "https://github.com/victorzllDev/QR-Code",
		ling:['html', 'css', 'javascript']
	}
];

const divProjects = document.querySelector('#projects');

projects.map((val) => {
	divProjects.innerHTML += `

	<div class="project">
		<figure>
			<a href="${val.website}" target="_blank" class="button-apple">WebSite</a>
			<img src="img/${val.img}" alt="${val.name}">
		</figure>
		<div class="content">
			<h2>${val.name}</h2>
			<a href="${val.repository}" target="_blank" class="button-apple">Repositorio</a>
			<div class="icons-use-ling">
			`+
				val.ling.map((ling)=>{
					return `<img height="100px" src="svg/${ling}.svg" alt="${ling}">`
				}).join('');
			+`
			</div>
		</div>
	</div>

	`
});
