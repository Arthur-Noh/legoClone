import { typography } from './typography';
import { white, black, gray, yellow, blue, red, orange } from './palette';
import { scaler } from '../../helper/scaler';

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
    templatePadding: scaler(16),
    smallComponentPadding: scaler(12),
    mediumComponentPadding: scaler(18),
    largeComponentPadding: scaler(24),
    smallRadius: scaler( 4),
    mediumRadius: scaler( 8),
    largeRadius: scaler(12),
};

export default {
    colors,
    base,
    typography,
};