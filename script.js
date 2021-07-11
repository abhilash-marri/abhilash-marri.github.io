let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

const about = `<b>Experienced Software Engineer with a demonstrated history of working in building and developing
software applications. Algorithmic thinker skilled in React, Java, Spring Boot and Jenkins. Strong engineering professional with a Bachelor's Degree
focused in Computer science and engineering from Jawaharlal Nehru Technological University.</b>`;
document.getElementById('about_p').innerHTML = about;

if (theme == null) {
	setTheme('red')
} else {
	setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		// console.log('option clicked', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'cyan') {
		document.getElementById('theme-style').href = 'cyan.css'
	}
	if (mode == 'orange') {
		document.getElementById('theme-style').href = 'orange.css'
	}
	if (mode == 'red') {
		document.getElementById('theme-style').href = 'red.css'
	}
	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}
	localStorage.setItem('theme', mode)
}
