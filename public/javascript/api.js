// var apiURL = "https://api.thedogapi.com/v1"
// //breed endpoint
// var breedEndpoint = '/breeds'

//&api_key= added to the key
var apiKey = "&api_key=live_vqm057yKxYgjVnFyPLRJ1YAljtY8n1Qc6c4oUAF9Uv8UVnUTC4qKi1noDSljZ2No"


//use api to get breed information
const getDogBreeds = (dogbreed) => {
    const data = fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dogbreed}`)
    //return the data
    .then(data => data.json())
    //display data

    //if an error occurs
    .catch(error => console.error('Could not fetch your data'));
    
}

getDogBreeds("bulldog");

//display api info on screen
