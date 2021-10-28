var nbaUrl = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";
var playerSearch = "";
var searchValue = $("#search-input")
var searchBtn = $("#search-btn")
var plyrName = $("#player-name")
var plyrTeam = $("#team")
var plyrPosi = $("#position")
var plyrConf= $("#conference")
var plyrHeight = $("#height")

function searchPlayer(){
    playerSearch = searchValue.val();
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
        
        plyrName.text(data.data[0].first_name + " " + data.data[0].last_name);
        plyrTeam.text("Current Team: " + data.data[0].team.full_name);
        if(data.data[0].position == ""){
            plyrPosi.text("Position: N/A");
        }else
        plyrPosi.text("Position: " + data.data[0].position);
        plyrConf.text("Conference: " + data.data[0].team.conference);
        if(data.data[0].height_feet !== null){
            plyrPosi.text("Height: N/A");
        }else
        plyrHeight.text("Height: " + data.data[0].height_feet + "" + data.data[0].height_inches);

        // for (var i = 0; i < data.data.length; i++) {
        //     plyrName.text(data.data[i].first_name + " " + data.data[i].last_name);
        //     plyrTeam.text("Current Team: " + data.data[i].team.full_name);
        //     plyrPosi.text("Position: " + data.data[i].position);
        //     plyrConf.text("Conference: " + data.data[i].team.conference);
        //     plyrHeight.text("Height: " + data.data[i].height_feet + "" + data.data[i].height_inches);
        // }
    })
}


searchBtn.click(searchPlayer);




