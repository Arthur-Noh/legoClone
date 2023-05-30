export interface IWhite {
    base: string;
}

export interface IBlack {
    base: string;
}

export interface IGray {
    base: string;
}

export interface IYellow {
    base: string;
}

export interface IBlue {
    base: string;
}

export interface IRed {
    base: string;
}

export interface IOrange {
    base: string;
}

export const white: IWhite = {
    base: '#ffffff',
};

export const black: IBlack = {
    base: '#000000',
};

export const gray: IGray = {
    base: '#a0a1a4',
};
// TODO : Need to setting base color
export const yellow: IYellow = {
    base: '#e5de00',
};

export const blue: IBlue = {
    base: '#1167b1',
};

export const red: IRed = {
    base: '#ec3735',
};

export const orange: IOrange = {
    base: '#fe7f0c',
};