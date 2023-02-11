export enum TextStyle {
    Bold = 1,
    Vague = 2,
    Cursive = 3,
    UnderLine = 4,
    Transparent = 8,
    Strike = 9,
    DoubleUnderline = 21,
}

export enum TextColor {
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

export enum BackgroundColor {
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

export default new (class Style {
    public TextStyle: typeof TextStyle;
    public TextColor: typeof TextColor;
    public BackgroundColor: typeof BackgroundColor;

    constructor() {
        this.TextStyle = TextStyle;

        this.TextColor = TextColor;

        this.BackgroundColor = BackgroundColor;
    }

    titleCase(string: string, lowercase: boolean = false) {
        if (lowercase == true) string = string?.toString()?.toLowerCase();
        return string
            ?.toString()
            ?.split(/ +/g)
            ?.map((word) => word?.slice(0, 1).toUpperCase() + word?.slice(1))
            .join(' ');
    }

    pascalCase(string: string, lowercase: boolean = false) {
        if (lowercase == true) string = string?.toString()?.toLowerCase();
        return string
            ?.toString()
            ?.split(/ +/g)
            ?.map((word) => word?.slice(0, 1).toUpperCase() + word?.slice(1))
            .join(' ');
    }

    stringCase(string: string, lowercase: boolean = false) {
        if (lowercase == true) string = string?.toString()?.toLowerCase();
        return string?.toString()?.charAt(0)?.toUpperCase() + string?.toString()?.slice(1);
    }

    phraseCase(string: string, lowercase: boolean = false) {
        if (lowercase == true) string = string?.toString()?.toLowerCase();
        return string
            ?.toString()
            ?.split(/[!?.]/gi)
            .map((phrase) => phrase?.toString().charAt(0)?.toUpperCase() + phrase?.toString()?.slice(1))
            .join(' ');
    }

    log(text: string, options: LogOptions) {
        const styling = { color: '', style: '' };

        if (options?.color) styling.color = `\u001b[${options.color}m`;

        if (options?.style) styling.style = `\u001b[${options.style}m`;

        return `${styling.color}${styling.style}${text}\u001b[0;0m`;
    }
})();

export interface LogOptions {
    style?: TextStyle;
    color?: BackgroundColor | TextColor;
}
