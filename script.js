// bing Image API Variables
var picture1 = document.getElementById("picture1");
var picture2 = document.getElementById("picture2");
var picture3 = document.getElementById("picture3");
// var picture4 = document.getElementById("picture4");
// var fetchButton = document.getElementById("search-btn");

// Newton/NBA API Variables
var nbaUrl = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";
var playerSearch = "";
var bingSearch = "";
var searchValue = $("#search-input");
var searchBtn = $("#search-btn");
var plyrName = $("#player-name");
var plyrName2 = $("#player-name-2");
var plyrTeam = $("#team");
var plyrPosi = $("#position");
var plyrConf = $("#conference");
var plyrDivis = $("#division");
var properImage = "";

function searchPlayer() {
    playerSearch = searchValue.val();
    playerSearch = playerSearch.toLowerCase();
    playerSearch = encodeURIComponent(playerSearch.trim());

    //Player Information Fill

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

            bingSearch = data.data[0].first_name + "%20" + data.data[0].last_name + "%20nba";
            bingSearch = bingSearch.toLowerCase();

            plyrName.text(data.data[0].first_name + " " + data.data[0].last_name);
            plyrName2.text(data.data[0].first_name + " " + data.data[0].last_name);
            plyrTeam.text("Current Team: " + data.data[0].team.full_name);
            if (data.data[0].position == "") {
                plyrPosi.text("Position: N/A");
            } else
                plyrPosi.text("Position: " + data.data[0].position);
            plyrConf.text("Conference: " + data.data[0].team.conference);
            plyrDivis.text("Division: " + data.data[0].team.division);

            // for (var i = 0; i < data.data.length; i++) {
            //     plyrName.text(data.data[i].first_name + " " + data.data[i].last_name);
            //     plyrTeam.text("Current Team: " + data.data[i].team.full_name);
            //     plyrPosi.text("Position: " + data.data[i].position);
            //     plyrConf.text("Conference: " + data.data[i].team.conference);
            //     plyrHeight.text("Height: " + data.data[i].height_feet + "" + data.data[i].height_inches);
            // }

            fillImage();
        })

    //Bing Image Fill
    function fillImage() {
        fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=" + bingSearch, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                "x-rapidapi-key": "f00811a9b8mshbde7c23c4a7c457p107154jsnad487331fa3c"
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data, "data")
                console.log(data.value[0].contentUrl);
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].name);
                }
                picture1.setAttribute("src", data.value[0].contentUrl);
                picture2.setAttribute("src", data.value[1].contentUrl);
                picture3.setAttribute("src", data.value[2].contentUrl);
            })
        }
    }
    

searchBtn.click(searchPlayer);
