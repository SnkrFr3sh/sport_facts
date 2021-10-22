var nbaUrl = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";
var playerSearch = "";

function search(){
    playerSearch = prompt("Enter Player Name", "First Name, Last Name");
    playerSearch = playerSearch.toLowerCase();
    playerSearch = encodeURIComponent(playerSearch.trim());

    fetch(nbaUrl + "&search=" + playerSearch, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "4660f8a703mshbbfbc04b0932863p1888e1jsn2832fd26da7c"
        }
    })
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log(data.data);
        for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].first_name, data.data[i].last_name);
        }
    })
}

search();




