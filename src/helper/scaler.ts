const basicDimension = {
    width: 375,
    height: 812,
};

const deviceDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export const scaler = (size: number) => {
    const scale = deviceDimensions.width / basicDimension.width;
    return Math.round(size * scale);
};

export const fontScaler = (fontSize: number) => {
    const scale = Math.sqrt(deviceDimensions.height / basicDimension.height);
    return Math.round(fontSize * scale);
};