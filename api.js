let url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49';

const ghibli = document.getElementById('ghibli');
const button = document.getElementById('press');
button.addEventListener('click', fetchResult);

function fetchResult() {
  fetch(url)
  	// This line converts it to a usable JSON object
    .then(response => response.json()) 
    // This line appends the title of the result to the page
    .then(result => {
        //Should change 'Studio Ghibli' to 'My Neighbor Totoro' when 'Movie' button is clicked 
      ghibliDirectory.innerHTML = result.title;
      movieInfo.innerText = result.director;
      releaseYear.innerText=result.release_date;
     
    });
}
/*repeat this function but have it append to the 'what is it about?' which will cause it to change to the movie
description when then 'desc' button is clicked. */

