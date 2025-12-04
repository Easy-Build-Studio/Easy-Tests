const bgGreen = "\x1b[42m";
const black = "\x1b[30m";
const reset = "\x1b[0m";

export function passed () {
    console.log(`${black}${bgGreen} PASS ${reset}`)
};