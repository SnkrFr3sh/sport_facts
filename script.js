fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=tesla", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "f00811a9b8mshbde7c23c4a7c457p107154jsnad487331fa3c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

function getApi() {
    var requestUrl = 'https://google-search3.p.rapidapi.com/api/v1/images/q=tesla';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })}