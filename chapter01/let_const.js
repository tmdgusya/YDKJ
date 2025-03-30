const assert = require('assert');

const myBirthday = true;
let age = 39;

if (myBirthday) {
    age += 1;
    // myBirthday = false; // TypeError: Assignment to constant variable.
}

const actors = ["Kyle", "Sarah", "Dr. Evil"];

actors.pop();

assert(actors.includes("Dr. Evil"));