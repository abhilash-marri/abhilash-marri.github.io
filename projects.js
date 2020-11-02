const projects = [
    {
        title: 'WIKIME',
        image:'images/chrome.jpg',
        co-author: 'Sai Raman Kilambi',
        type: 'Google Chrome Extension',
        description: 'A chrome extension which searches for the highlighted text in WIKIPEDIA.'
    },

{
      title: 'Student Garde Prediction',
        image:'images/grade.jpeg',
        type: 'Machine Learning Model',
        co-author: 'Sai Raman Kilambi',
        description: `A machine learning project that uses both Naive Bayes and Decision
        Tree algorithms to predict the grade of a student.
        Technologies: Python, Scikit-learn, pandas, matplotlib`
    },
    {
        title: 'Tennis Game ',
        image:'images/tennis.png',
        co-author: 'Sai Raman Kilambi',
        type: 'Javascript',
        description: `A tennis game developed using HTML, CSS and Javascript (Using
            Canvas)`
    },
    {
        title: 'Snake Game',
        type: 'Javascript',
        co-author: 'Sai Raman Kilambi',
        image:'images/snake.png',
        description: `The classic snake game build using Javascript and P5.js.`
    },
    {
        title: 'Budget Manager',
        image:'images/chrome.jpg',
        co-author: 'Sai Raman Kilambi',
        type: 'Google Chrome Extension',
        description: `A chrome extension to make a note of expenses especially on the
        ecommerce websites.`
    },
    {
        title: 'Speak It',
        type: 'Google Chrome Extension',
        image:'images/chrome.jpg',
        co-author: 'Sai Raman Kilambi',
        description: `A chrome extension which says aloud the selected text on the
        browser using the Web Speech API of chrome.`
    },
]

let search_input = document.getElementById('search');

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

search_input.addEventListener(
    "keyup",
    debounce( filter, 1000 )
);


function displayProjects(list) {
    let value = ``;
    list.forEach((project) => {

        value += `
        <div>
        <div class="post">
            <a href=${project.url}><img class="thumbnail" src=${project.image}></a>
            <div class="post-preview">
                <h4 class="post-title">${project.title}-${project.type}</h4>
                <h5 style="color:blue>Co-Author: <a href="sai-raman.github.io">Sai Raman Kilambi</a></h5>
                <p class="post-intro" id="para"><b>${project.description}</b>
                </p>
            </div>
        </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

function filter(){
    let list = [];
    let searchText = document.getElementById('search').value;
    list = projects.filter(project=>{
        let name = project.title + " "+project.type+" "+project.description;
        return name.trim().toLowerCase().includes(searchText.trim().toLowerCase());
    })
    if(list.length!=0)
    displayProjects(list);
    else
    displayProjects(projects);
}


displayProjects(projects);

