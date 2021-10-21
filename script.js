fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "f00811a9b8mshbde7c23c4a7c457p107154jsnad487331fa3c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});