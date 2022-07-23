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

/**
 * 
 * @param {object} object - Object or Array; 
 * @returns a random element of an object or array;
 */
function randomElement(object) {
    if (Array.isArray(object)) {
        return object[randomNumber(object.length)]
    }

    if (typeof object == 'object') {
        const random = randomNumber(Object.keys(object).length)
        return { object: { [Object.keys(object)[random]]: Object.values(object)[random] }, key: Object.keys(object)[random], value: Object.values(object)[random] }
    }

    else return undefined;
}


/**
 * 
 * @param {object} object - Object or Array;
 * @returns a randomized array.
 */
function randomizeElements(object) {
    if (Array.isArray(object)) {
        const array = [];
        object = Array.from(object);
        while (object.length > 0) {
            array.push(object.splice(randomNumber(object.length), 1)[0])
        }
        return array;
    }

    if (typeof object == 'object') {
        const array = [];
        object = Object.entries(object).map((a) => { return { [a[0]]: a[1] } })
        while (object.length > 0) {
            array.push(object.splice(randomNumber(object.length), 1)[0])
        }
        return array;
    }

    else return undefined;
}

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
 * @returns a converted string with the first letter of each word capitalized.
 */
function toTitleCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.split(/ +/g)?.map(word => word?.slice(0, 1).toUpperCase() + word?.slice(1)).join(' ');

}

/**
 * 
 * @param {string} string - The string you want to get converted.
 * @required
 * @param {boolean} lowercase - Lower case the string before being converted.
 * @returns a converted string with the first letter of the string being capitalized.
 */
function toStringCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.charAt(0)?.toUpperCase() + string?.toString()?.slice(1);
}

/**
 * 
 * @param {string} string - The string you want to get converted.
 * @param {boolean} lowercase - Loower case the string before converting.
 * @returns a converted string with the first letter of each phrase being capitalized.
 */
function toPhraseCase(string, lowercase = false) {
    if (lowercase == true) string = string?.toString()?.toLowerCase();
    return string?.toString()?.split(/[!?.]/gi).map(phrase => phrase?.toString().charAt(0)?.toUpperCase() + phrase?.toString()?.slice(1)).join(" ");
}

function logStyle(text, type, color) {
    if (type.toLowerCase() == "text") {
        if (color.toLowerCase() == "red") return `\u001b[0;31m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "green") return `\u001b[0;32m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "yellow") return `\u001b[0;33m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "blue") return `\u001b[0;34m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "purple") return `\u001b[0;35m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "cyan") return `\u001b[0;36m${text}\u001b[0;0m`;
    }

    if (type.toLowerCase() == `background`) {
        if (color.toLowerCase() == "red") return `\u001b[0;41m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "green") return `\u001b[0;42m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "yellow") return `\u001b[0;43m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "blue") return `\u001b[0;44m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "purple") return `\u001b[0;45m${text}\u001b[0;0m`;
        if (color.toLowerCase() == "cyan") return `\u001b[0;46m${text}\u001b[0;0m`;
    }
}

module.exports = {
    // randoms
    randomNumber: randomNumber,
    randomColor: randomColor,
    randomElement: randomElement,
    randomizeElements: randomizeElements,

    // Delay
    delay: delay,
    sleep: delay,
    wait: delay,

    // Strings
    toPhraseCase: toPhraseCase,
    toTitleCase: toTitleCase,
    toStringCase: toStringCase,

    logStyle: logStyle

};