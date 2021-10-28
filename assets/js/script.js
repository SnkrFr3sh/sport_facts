fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=4000", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "bd9fd307c6mshd4925220356c88cp1bfc9cjsn1abcc7218d6d"
	}
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(function (data) {
    console.log(data)
})


fetch("https://free-nba.p.rapidapi.com/stats?page=0&per_page=25&player_id=251", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "bd9fd307c6mshd4925220356c88cp1bfc9cjsn1abcc7218d6d"
	}
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(function (data) {
    console.log(data)
})
