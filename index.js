// index.js - ES6

import Human from 'human.js'

let bob = new Human("Bob", "Morane");

document.querySelector("h1").innerHTML = `Hello ${bob.toString()}`;