let greeting = require("./greeting");
let myName = "Wilson"

greeting.morning(myName);

/**
 * path
 */

let path = require("path");

console.log(path.join(__dirname, "try.js"));
console.log(path.extname(__filename));

console.log(path.basename(__filename));

/**
 * url
 */

const url = require("url");

const pandaURL = "https://www.blocktempo.com/t-rex-mining-gpu-cryptocurrency-hash-rate-unlock-what-nvidia-did-to-lhr/"

const parsedURL = url.parse(pandaURL, true);
console.log(parsedURL.query);


/*
 * fs => file system
 */

const fs = require("fs");

fs.writeFile("try.txt", "Today is a good day.", e => {
    if (e) throw e;
    console.log("File has been written.");
})

fs.readFile("./try.txt", "utf8", (e, data) => {
    if (e) throw e;
    console.log(data);
})
