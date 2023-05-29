export interface ITypography {
    weight: {
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
    };
    size: {
        s1: number;
        s2: number;
        s3: number;
        m1: number;
        m2: number;
        m3: number;
        l1: number;
        l2: number;
        l3: number;
    };
}

export const typography: ITypography = {
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
    size: {
        s1: 10,
        s2: 12,
        s3: 14,
        m1: 16,  // Web base fontSize
        m2: 18,
        m3: 20,
        l1: 22,
        l2: 24,
        l3: 26,
    },
};