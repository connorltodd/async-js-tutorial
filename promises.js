const axios = require('axios');

// use a promise to return a greeting to display e.g 'welcome peter jones'
// the promise should also include error handling with a catch
const err = false;

function greeting(name) {
    return new Promise((resolve, reject) => {
        if (err) {
            reject('There was an error returning the greeting')
        } else {
            resolve(name)
        }
    })
}

greeting('peter jones')
    .then(response => {
        const greeting = `Hello ${response}`
        return greeting
    })
    .then(message => console.log(message))
    .catch(err => console.log(err))


// Use a promise to retrieve data from an api
// url to get users from github
// `https://api.github.com/users/${username}`

function getGithubUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
        .then(user => console.log(user.data))
}


getGithubUser('connorltodd')