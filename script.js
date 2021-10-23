var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');
var picture3 = document.getElementById('picture3');
// var picture4 = document.getElementById('picture4');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=tesla", {
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
    console.log(data.image_results[0].image.src);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
        var userName = document
        // userName.textContent=data[i].image_results.image;

    }
    picture1.setAttribute("src", data.image_results[0].image.src);
    picture2.setAttribute("src", data.image_results[1].image.src);
    picture3.setAttribute("src", data.image_results[2].image.src);
    // picture4.setAttribute("src", data.image_results[3].image.src);
})
}

fetchButton.addEventListener('click', getApi);
