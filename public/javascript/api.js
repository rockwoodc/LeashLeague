//URL- https://api.thedogapi.com/v1/images/search
var apiKey = "live_vqm057yKxYgjVnFyPLRJ1YAljtY8n1Qc6c4oUAF9Uv8UVnUTC4qKi1noDSljZ2No"


//use api to get breed information
const getDogBreeds = () => {
    const data = fetch('https://api.thedogapi.com/v1/breeds')
    //return the data
    .then(data => data.json())
    //if an error occurs
    .catch(error => console.error('Could not fetch your data'));
    
}

getDogBreeds();