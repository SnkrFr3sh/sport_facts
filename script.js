// Google Image API Variables
var picture1 = document.getElementById("picture1");
var picture2 = document.getElementById("picture2");
var picture3 = document.getElementById("picture3");
// var picture4 = document.getElementById("picture4");
var googleSearch = "";

// NBA API Variables
var nbaUrl = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";
var playerSearch = "";
var searchValue = $("#search-input");
var searchBtn = $("#search-btn");
var plyrName = $("#player-name");
var plyrTeam = $("#team");
var plyrPosi = $("#position");
var plyrConf= $("#conference");
var plyrHeight = $("#height");

//Player Information Fill
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
            plyrHeight.text("Height: N/A");
        }else
        plyrHeight.text("Height: " + data.data[0].height_feet + "" + data.data[0].height_inches);

        // for (var i = 0; i < data.data.length; i++) {
        //     plyrName.text(data.data[i].first_name + " " + data.data[i].last_name);
        //     plyrTeam.text("Current Team: " + data.data[i].team.full_name);
        //     plyrPosi.text("Position: " + data.data[i].position);
        //     plyrConf.text("Conference: " + data.data[i].team.conference);
        //     plyrHeight.text("Height: " + data.data[i].height_feet + "" + data.data[i].height_inches);
        // }
        googleSearch = data.data[0].first_name + "%20" + data.data[0].last_name + "%20nba";
        googleSearch = googleSearch.toLowerCase();

        searchImage();
    })
}

//Google Image Fill
function searchImage(){
    fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=" + googleSearch, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "f00811a9b8mshbde7c23c4a7c457p107154jsnad487331fa3c"
	}
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data.image_results[0].image.src);
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].name);
            var userName = document
            // userName.textContent=data[i].image_results.image;
        }
        console.log("https://google-search3.p.rapidapi.com/api/v1/images/q=" + googleSearch)
        picture1.setAttribute("src", data.image_results[0].image.src);
        picture2.setAttribute("src", data.image_results[1].image.src);
        picture3.setAttribute("src", data.image_results[2].image.src);
        // picture4.setAttribute("src", data.image_results[3].image.src);
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


// Google Image Fill
// function searchImage(){
//     fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=" + googleSearch, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "google-search3.p.rapidapi.com",
// 		"x-rapidapi-key": "f00811a9b8mshbde7c23c4a7c457p107154jsnad487331fa3c"
// 	}
//     })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         // console.log(data.image_results[0].image.src);
//         for (var i = 0; i < data.length; i++) {
//             // console.log(data[i].name);
//             var userName = document
//             // userName.textContent=data[i].image_results.image;
//         }
//         console.log("https://google-search3.p.rapidapi.com/api/v1/images/q=" + googleSearch)
//         picture1.setAttribute("src", data.image_results[0].image.src);
//         picture2.setAttribute("src", data.image_results[1].image.src);
//         picture3.setAttribute("src", data.image_results[2].image.src);
//         // picture4.setAttribute("src", data.image_results[3].image.src);
//     })




searchBtn.click(searchPlayer);
