let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

const about = `<b>Experienced Software Engineer with a demonstrated history of working in building and developing
software applications. Machine Learning and deep learning enthusiast. Strong engineering professional with a Bachelor's Degree
focused in Computer science and engineering from Jawaharlal Nehru Technological University.</b>`;
document.getElementById('about_p').innerHTML = about;

document.getElementById('theme-style').href = 'red.css'
