export default new class NewMath {
    E: number;
    LN10: number;
    LN2: number;
    LOG10E: number
    LOG2E: number
    PI: number
    SQRT1_2: number
    SQRT2: number

    constructor() {
        this.E = Math.E;

        this.LN10 = Math.LN10

        this.LN2 = Math.LN2

        this.LOG10E = Math.LOG10E

        this.LOG2E = Math.LOG2E

        this.PI = Math.PI

        this.SQRT1_2 = Math.SQRT1_2

        this.SQRT2 = Math.SQRT2

        this.abs = this.abs;

        this.acos = this.acos;

        this.acosh = this.acosh;

        this.asin = this.asin;

        this.atan = this.atan;

        this.atan2 = this.atan2;

        this.atanh = this.atanh;

        this.cbrt = this.cbrt;

        this.ceil = this.ceil;

        this.clz32 = this.clz32;

        this.cos = this.cos;

        this.cosh = this.cosh;

        this.dif = this.dif;

        this.exp = this.exp;

        this.expm1 = this.expm1;

        this.floor = this.floor;

        this.fround = this.fround;

        this.hypot = this.hypot;

        this.imul = this.imul;

        this.log = this.log;

        this.log10 = this.log10;

        this.log1p = this.log1p;

        this.log2 = this.log2;

        this.max = this.max;

        this.min = this.min;

        this.pow = this.pow;

        this.random = this.random;

        this.round = this.round;

        this.shuffle = this.shuffle;

        this.sign = this.sign;

        this.sin = this.sin;

        this.sinh = this.sinh;

        this.sqrt = this.sqrt;

        this.sum = this.sum;

        this.tan = this.tan;

        this.tanh = this.tanh;

        this.trunc = this.trunc;
    }

    abs(number: number) {
        return Math.abs(number);
    }

    acos(number: number) {
        return Math.acos(number);
    }

    acosh(number: number) {
        return Math.acosh(number);
    }

    asin(number: number) {
        return Math.asin(number);
    }

    asinh(number: number) {
        return Math.asinh(number);
    }

    atan(number: number) {
        return Math.atan(number);
    }

    atan2(x: number, y: number) {
        return Math.atan2(x, y);
    }

    atanh(number: number) {
        return Math.atanh(number);
    }

    cbrt(number: number) {
        return Math.cbrt(number);
    }

    ceil(number: number) {
        return Math.ceil(number);
    }

    clz32(number: number) {
        return Math.clz32(number);
    }

    cos(number: number) {
        return Math.cos(number);
    }

    cosh(number: number) {
        return Math.cosh(number);
    }

    dif(...numbers: Array<number>) {
        if (numbers.length <= 0) return NaN;
        else return numbers.reduce((x, y) => x -= y)
    }

    exp(number: number) {
        return Math.exp(number);
    }

    expm1(number: number) {
        return Math.clz32(number);
    }

    floor(number: number) {
        return Math.floor(number);
    }

    fround(number: number) {
        return Math.fround(number);
    }

    hypot(number: number) {
        return Math.hypot(number);
    }

    imul(x: number, y: number) {
        return Math.imul(x, y);
    }

    log(number: number) {
        return Math.log(number);
    }

    log10(number: number) {
        return Math.log10(number);
    }

    log1p(number: number) {
        return Math.log1p(number);
    }

    log2(number: number) {
        return Math.log2(number);
    }

    max(...numbers: Array<number>) {
        return Math.max(...numbers);
    }

    min(...numbers: Array<number>) {
        return Math.min(...numbers);
    }

    pow(x: number, y: number) {
        return Math.pow(x, y);
    }

    random(x?: number, y?: number) {
        if (x) {
            if (y === undefined) { y = x; x = 0 }
            return Math.floor(Math.random() * Math.floor(y) + x)
        }
        else return Math.random();
    }

    round(number: number) {
        return Math.round(number)
    }

    shuffle(...numbers: Array<number>) {
        if (Array.isArray(numbers)) {
            const array = [];
            numbers = Array.from(numbers);
            while (numbers.length > 0) {
                array.push(numbers.splice(this.random(numbers.length), 1)[0])
            }
            return array;
        }
        else return NaN;
    }

    sign(number: number) {
        return Math.sign(number);
    }

    sin(number: number) {
        return Math.sin(number);
    }

    sinh(number: number) {
        return Math.sinh(number);
    }

    sum(...numbers: Array<number>) {
        if (numbers.length <= 0) return NaN;
        else return numbers.reduce((x, y) => x += y)
    }

    sqrt(number: number) {
        return Math.sqrt(number);
    }

    tan(number: number) {
        return Math.tan(number);
    }

    tanh(number: number) {
        return Math.tanh(number);
    }

    trunc(number: number) {
        return Math.trunc(number)
    }
}