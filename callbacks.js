// create a console.log displaying the welcome message in two seperate set timeouts
// create a callback function to display e.g 'welcome peter jones'

// Sync  Async demo 
// console.log('hello');

// setTimeout(() => {
//     console.log(' welcome to my ')
// }, 0);

// console.log('world')

function greeting(name) {
    console.log(`hello ${name}`);
}

function getName(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`
    callback(fullName)
}

getName('peter', 'jones', greeting)


