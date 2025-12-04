const bgGreen = "\x1b[42m";
const bgRed = "\x1b[41m";
const black = "\x1b[30m";
const reset = "\x1b[0m";

export function passed <T>(other: T) {
    console.log(`${black}${bgGreen} PASS ${reset} ${other}`)
};

export function failed<T>(other: T) {
    console.log(`${black}${bgRed} FAIL ${reset} ${other}`)
}
