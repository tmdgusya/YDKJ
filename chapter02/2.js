let f;

f = function(name) {
    return `Hello ${name}`;
}

console.log(f("Kyle")); // Hello Kyle

f = function(name) {
    return `Bye ${name}`;
}

console.log(f("Kyle")); // Bye Kyle