//Import the HTTP module from Node.js
const https = require('https');

//Configure the options for the GET request to the Github API to retrieve the top 10 most popular repositories of google
const options = {
    hostname: 'api.github.com',
    path: '/users/google/repos?sort=stars&per_page=10', // use the "sort=stars" parameter to sort by stars and "per_page=10" to limit the results to 10 repositories
    headers: {
        'User-Agent' : 'Node.js'
    }
};

//Make the GET request to the GitHub API with the configured options
const req = https.get(options, (res) => {
    let data = ''; //Declare a variable to accumulate the server response

    //Listen for the 'data' event to accumulate the server response
    res.on('data', (chunk) => {
        data += chunk;
    });

    //Listen for the 'end' event to process the completed server response
    res.on('end', () => {
        if (res.statusCode === 200) { // Check if the response is successful (status code 200)
            const repositories = JSON.parse(data); //Parse the JSON response and store it in a variable

            console.log(`Los 10 repositorios más populares del usuario "google" son:`);
            //Iterate over the top 10 repositories and display theis names and star counts
            repositories.forEach(repository => {
                console.log(`${repository.name}`);
            });
        } else { // If the response is not successful, display an error message
            console.log(`An error occurred while retrieving the repositories: ${res.statusCode} ${res.statusMessage}`);
        }
    })
});

//Handle any error that may accur during the request

req.on('error', (error) => {
    console.error(`An error occurred while making the request: ${error.message}`);
});

//Send the request to the server
req.end();