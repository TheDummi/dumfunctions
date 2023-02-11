export declare enum TextStyle {
    Bold = 1,
    Vague = 2,
    Cursive = 3,
    UnderLine = 4,
    Transparent = 8,
    Strike = 9,
    DoubleUnderline = 21,
}
export declare enum TextColor {
    None = 29,
    Grey = 30,
    Red = 31,
    Green = 32,
    Yellow = 33,
    Blue = 34,
    Purple = 35,
    Cyan = 36,
    Blanche = 37,
    LightGrey = 90,
    LightRed = 91,
    LightGreen = 92,
    LightYellow = 93,
    LightBlue = 94,
    Violet = 95,
    Turquoise = 96,
    White = 97,
}
export declare enum BackgroundColor {
    None = 39,
    Grey = 40,
    Red = 41,
    Green = 42,
    Yellow = 43,
    Blue = 44,
    Purple = 45,
    Cyan = 46,
    Blanche = 47,
    LightGrey = 100,
    LightRed = 101,
    LightGreen = 102,
    LightYellow = 103,
    LightBlue = 104,
    Violet = 105,
    Turquoise = 106,
    White = 107,
}
declare const _default: {
    TextStyle: typeof TextStyle;
    TextColor: typeof TextColor;
    BackgroundColor: typeof BackgroundColor;
    titleCase(string: string, lowercase?: boolean): string;
    pascalCase(string: string, lowercase?: boolean): string;
    stringCase(string: string, lowercase?: boolean): string;
    phraseCase(string: string, lowercase?: boolean): string;
    log(text: string, options: LogOptions): string;
};
export default _default;
export interface LogOptions {
    style?: TextStyle;
    color?: BackgroundColor | TextColor;
}
