import { createGlobalStyle } from 'styled-components';
import NanumSquareEB from '../../fonts/NanumSquareEB.ttf';
import NanumSquareB from '../../fonts/NanumSquareB.ttf';
import NanumSquareR from '../../fonts/NanumSquareR.ttf';
import NanumSquareL from '../../fonts/NanumSquareL.ttf';

export const GlobalFontStyle = createGlobalStyle`
@font-face {
    font-family: 'NanumSquareEB';
    src: local('NanumSquareEB');
    font-style: normal;
    src: url(${NanumSquareEB}) format('truetype');
};
@font-face {
    font-family: 'NanumSquareB';
    src: local()('NanumSquareB');
    font-style: normal;
    src: url(${NanumSquareB}) format('truetype');
};
@font-face {
    font-family: 'NanumSquareR';
    src: local()('NanumSquareR');
    font-style: normal;
    src: url(${NanumSquareR}) format('truetype');
};
@font-face {
    font-family: 'NanumSquareL';
    src: local()('NanumSquareL');
    font-style: normal;
    src: url(${NanumSquareL}) format('truetype');
};
`;

const NanumEB = 'NanumSquareEB' as const;
const NanumB = 'NanumSquareB' as const;
const NanumR = 'NanumSquareR' as const;
const NanumL = 'NanumSquareL' as const;

export default {
    NanumEB,
    NanumB,
    NanumR,
    NanumL,
};