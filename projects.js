const projects = [
    {
        title: 'COVID-19 Tracker',
        url: 'https://abhilash-marri.github.io/covidtracker/',
        codeUrl:'https://github.com/abhilash-marri/covid-tracker',
        private:false,
        image:'images/tracker.png',
        type: 'React.js',
        description: 'A React project that tracks the COVID-19 cases across the world. It displays world wide trend using line graph and country wide cases in the form of bar graphs.'
    }
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
                <p class="post-intro" id="para"><b>${project.description}</b>
                </p>
                <button class="btn btn-danger" onclick="window.open('${project.codeUrl}', '_blank');">View Code</button>
                <button class="btn btn-warning" onclick="window.open('${project.url}', '_blank');">Demo</button>
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

