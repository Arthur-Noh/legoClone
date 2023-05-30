import 'styled-components';
import { ITypography, typography } from './style/typography';
import { IWhite, IBlack, IGray, IYellow, IBlue, IRed, IOrange } from './style/palette';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            black: IBlack,
            gray: IGray,
            yellow: IYellow,
            blue: IBlue,
            red: IRed,
            orange: IOrange,
        };
        base: {
            templatePadding: number,
            smallComponentPadding: number,
            mediumComponentPadding: number,
            largeComponentPadding: number,
            smallRadius: number,
            mediumRadius: number,
            largeRadius: number,
        };
        typography: ITypography;
    }
}
