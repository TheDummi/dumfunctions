export default new (class NewMath {
    public E: number;
    public LN10: number;
    public LN2: number;
    public LOG10E: number;
    public LOG2E: number;
    public PI: number;
    public SQRT1_2: number;
    public SQRT2: number;

    constructor() {
        this.E = Math.E;

        this.LN10 = Math.LN10;

        this.LN2 = Math.LN2;

        this.LOG10E = Math.LOG10E;

        this.LOG2E = Math.LOG2E;

        this.PI = Math.PI;

        this.SQRT1_2 = Math.SQRT1_2;

        this.SQRT2 = Math.SQRT2;
    }

    public abs(number: number) {
        return Math.abs(number);
    }

    public acos(number: number) {
        return Math.acos(number);
    }

    public acosh(number: number) {
        return Math.acosh(number);
    }

    public asin(number: number) {
        return Math.asin(number);
    }

    public asinh(number: number) {
        return Math.asinh(number);
    }

    public atan(number: number) {
        return Math.atan(number);
    }

    public atan2(x: number, y: number) {
        return Math.atan2(x, y);
    }

    public atanh(number: number) {
        return Math.atanh(number);
    }

    public cbrt(number: number) {
        return Math.cbrt(number);
    }

    public ceil(number: number) {
        return Math.ceil(number);
    }

    public clz32(number: number) {
        return Math.clz32(number);
    }

    public cos(number: number) {
        return Math.cos(number);
    }

    public cosh(number: number) {
        return Math.cosh(number);
    }

    public dif(...numbers: Array<number>) {
        if (numbers.length <= 0) return NaN;
        else return numbers.reduce((x, y) => (x -= y));
    }

    public exp(number: number) {
        return Math.exp(number);
    }

    public expm1(number: number) {
        return Math.clz32(number);
    }

    public floor(number: number) {
        return Math.floor(number);
    }

    public fround(number: number) {
        return Math.fround(number);
    }

    public hypot(number: number) {
        return Math.hypot(number);
    }

    public imul(x: number, y: number) {
        return Math.imul(x, y);
    }

    public log(number: number) {
        return Math.log(number);
    }

    public log10(number: number) {
        return Math.log10(number);
    }

    public log1p(number: number) {
        return Math.log1p(number);
    }

    public log2(number: number) {
        return Math.log2(number);
    }

    public max(...numbers: Array<number>) {
        return Math.max(...numbers);
    }

    public min(...numbers: Array<number>) {
        return Math.min(...numbers);
    }

    public pow(x: number, y: number) {
        return Math.pow(x, y);
    }

    public precise(x: number, y: number) {
        let z = '1';

        while (y) {
            z += '0';
            y--;
        }

        return Math.round(x * parseInt(z)) / parseInt(z);
    }

    public random(x?: number, y?: number) {
        if (x) {
            if (y === undefined) {
                y = x;
                x = 0;
            }
            return Math.floor(Math.random() * Math.floor(y) + x);
        } else return Math.random();
    }

    public round(number: number) {
        return Math.round(number);
    }

    public shuffle(...numbers: Array<number>) {
        if (Array.isArray(numbers)) {
            const array = [];
            numbers = Array.from(numbers);
            while (numbers.length > 0) {
                array.push(numbers.splice(this.random(numbers.length), 1)[0]);
            }
            return array;
        } else return NaN;
    }

    public sign(number: number) {
        return Math.sign(number);
    }

    public sin(number: number) {
        return Math.sin(number);
    }

    public sinh(number: number) {
        return Math.sinh(number);
    }

    public sum(...numbers: Array<number>) {
        if (numbers.length <= 0) return NaN;
        else return numbers.reduce((x, y) => (x += y));
    }

    public sqrt(number: number) {
        return Math.sqrt(number);
    }

    public tan(number: number) {
        return Math.tan(number);
    }

    public tanh(number: number) {
        return Math.tanh(number);
    }

    public trunc(number: number) {
        return Math.trunc(number);
    }
})();
