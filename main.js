/**
 * @param {number} minimum - The minimum value of the number pool.
 * @type {number} 
 * @required 
 * @param {number} maximum - The maximum value of the number pool. If no max specified min will become max.
 * @type {number}
 * @returns a random generated number between the minimum value and the maximum value.
 */
function randomNumber(minimum, maximum) {
    if (maximum === undefined) { maximum = minimum; minimum = 0; }

    return Math.floor(Math.random() * Math.floor(maximum) + minimum);
};

/**
 * @param {number} milliseconds - The amount of milliseconds the code should wait.
 * @type {number}
 * @required
 * @async
 * @returns a break in the code before continuing.
 */
async function delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * 
 * @param {string} string - The string you want to be converted.
 * @required
 * @param {boolean} lowercase - Lower case the string before converting it.
 * @returns a converted string with each word capitalized.
 */
function title(string, lowercase = false) {
    if (lowercase == true) string = string?.toLowerCase();
    return string?.toString()?.split(/ +/g)?.map(word => word?.slice(0, 1).toUpperCase() + word?.slice(1)).join(' ');

}

/**
 * 
 * @param {string} string - The string you want to get converted.
 * @required
 * @param {boolean} lowercase - Lower case the string before being converted.
 * @returns a converted string with the first word being capitalized.
 */
function capitalize(string, lowercase = false) {
    if (lowercase == true) string = string?.toLowerCase();
    return string?.toString()?.charAt(0)?.toUpperCase() + string?.toString()?.slice(1);
}

/**
 * 
 * @param {string} type - rgb or hex 
 * @returns type of random color
 */
function randomColor(type) {
    if (type?.toString()?.toLowerCase() == 'rgb') {
        let r = () => Math.random() * 256 >> 0;
        return `rgb(${r()}, ${r()}, ${r()})`;
    }
    if (type?.toString()?.toLowerCase() == 'hex') {
        let hex = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += hex[randomNumber(16)];
        }
        return color;
    }
    else return undefined;
}

module.exports = {
    // Random Number
    randomNumber: randomNumber,
    ranNum: randomNumber,

    // Delay
    delay: delay,
    sleep: delay,
    wait: delay,

    // Title
    title: title,

    // Capitalize
    capitalize: capitalize,

    // RandomColor
    randomColor: randomColor,
    ranCol: randomColor,
};