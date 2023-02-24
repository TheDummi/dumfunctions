import Math from './Math.js';

export default new (class Random {
    constructor() {
        this.number = this.number;

        this.element = this.element;
    }

    number(min: number, max: number) {
        if (min === undefined) return Math.random(10);
        else return Math.random(min, max);
    }

    element(array: Array<unknown> | object) {
        if (Array.isArray(array)) {
            return array[Math.random(array.length)];
        }

        if (typeof array == 'object') {
            const random = Math.random(Object.keys(array).length);
            return {
                object: { [Object.keys(array)[random]]: Object.values(array)[random] },
                key: Object.keys(array)[random],
                value: Object.values(array)[random],
            };
        } else return undefined;
    }

    #color() {}
})();
