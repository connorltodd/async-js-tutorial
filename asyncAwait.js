const axios = require('axios');

// url to get users from github
// `https://api.github.com/users/${username}`

async function getGithubUser(username) {
    try {
        consle.log('hello')
        const response = await axios.get(`https://api.github.om/users/${username}`)
        console.log(response.data)
        console.log('world')

    } catch (err) {
        console.log('there was an error')
    }
}

getGithubUser('connorltodd')

// use async await to return all data regarding a given user
// create a try catch to display error handling


