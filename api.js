const baseURL = 'http://ghibliapi.herokuapp.com';
//site says that no authentication is required to use api so no key is necessary
let url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

const ghibli = document.getElementById ('.ghibli')
const press = document.getElementsByClassName ('press')
press.addEventListener ('click', fetchResults);

function fetchResults () {
fetch('https://ghibliapi.herokuapp.com/films') 
.then (res => res.json())
.then (res => fetchResults);
}

  
