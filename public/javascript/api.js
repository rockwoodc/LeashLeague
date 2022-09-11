// var apiURL = "https://api.thedogapi.com/v1"
// //breed endpoint
// var breedEndpoint = '/breeds'

//&api_key= added to the key
var apiKey = "&api_key=live_vqm057yKxYgjVnFyPLRJ1YAljtY8n1Qc6c4oUAF9Uv8UVnUTC4qKi1noDSljZ2No"

function value(){
    // getDogBreeds(getValue.options[getValue.selectedindex].value);
    let select = document.getElementById('dog-dropdown');

    getDogBreeds(select.options[select.selectedIndex].value);
}

//use api to get breed information
function getDogBreeds(dogbreed){
     fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dogbreed}`)
    //return the data
    .then(res => res.json())
    .then(data => console.log(data))
    //display data
    const dogData = result.map((data) => ({

        temperament: data.temperament,
        image: data.reference_image.id,
        
    }));
    //if an error occurs
    // .catch(error => console.error('Could not fetch your data'));
    // console.log(dogbreed.temperament)
}


document.getElementById('Explore').addEventListener('click', value)
//display api info on screen
