import { typography } from './typography';
import { white, black, gray, yellow, blue, red, orange } from './palette';

const colors = {
    white,
    black,
    gray,
    yellow,
    blue,
    red,
    orange,
};

// TODO : Need to write base value (component)
const base = {
    templatePadding: 16,
    smallComponentPadding: 12,
    mediumComponentPadding: 18,
    largeComponentPadding: 24,
    smallRadius: 4,
    mediumRadius: 8,
    largeRadius: 12,
};

export default {
    colors,
    base,
    typography,
};