var app = new Vue({ 
  el: '#app',
  data: {
      authors: false,
      weeks: false
  },
  template: `
<div>
  <h1>Authors</h1>
  {{ authors ? Object.keys(authors).length + ' authors' : 'Loading...' }}
  <h1>Weeks</h1>
  {{ weeks ? weeks.length + ' weeks' : 'Loading...' }}  
</div>`
});

getData(function(err, data) {
  app.authors = data.authors;
  app.weeks = data.weeks;
});

function getData(callback) {
  let request = new XMLHttpRequest();
  request.open('GET', './data.json', true);
  request.onerror = function() {
    let err = new Error('Error during data retrieval.');
    callback(err);
  }
  request.onload = function() {
    if(request.status >= 200 && request.status < 400) {
      callback(null, JSON.parse(request.responseText));
    } else {
      let err = new Error('Unexpected HTTP status retrieving data: ' + request.status);
      callback(err);
    }
  }
  request.send();
}