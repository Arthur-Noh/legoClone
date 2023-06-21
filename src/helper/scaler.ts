export const mobileDimension = {
    width: 768,
}

const basicDimension = {
    width: 418,
    height: 812,
};

const deviceDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export const scaler = (size: number) => {
    if (deviceDimensions.width > mobileDimension.width) {
        return size;
    }
    const scale = deviceDimensions.width / basicDimension.width;
    return Math.round(size * scale);
};

export const fontScaler = (fontSize: number) => {
    const scale = Math.sqrt(deviceDimensions.height / basicDimension.height);
    return Math.round(fontSize * scale);
};