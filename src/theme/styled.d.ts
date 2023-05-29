import 'styled-components';
import { ITypography, typography } from './style/typography';
import { IWhite, IBlack, IGray, IYellow, IBlue ,IRed } from './style/palette';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: IWhite,
            black: IBlack,
            gray: IGray,
            yellow: IYellow,
            blue: IBlue,
            red: IRed,
        };
        base: {
            templatePadding: number,
        };
        typography: ITypography;
    }
}
