import baseStyled, { ThemedStyledInterface } from 'styled-components';
import Bright from './style/bright';
import GlobalFonts from './style/globalFonts';

export const theme = Bright;
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;