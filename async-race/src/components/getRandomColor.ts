const getRandomColor = () => {
    const getRandom = (min: number, max: number) => Math.ceil(Math.random() * (max - min) + min);
    const rgbMin = 0;
    const rgbMax = 255;

    const redComponent = getRandom(rgbMin, rgbMax).toString(16);
    const greenComponent = getRandom(rgbMin, rgbMax).toString(16);
    const blueComponent = getRandom(rgbMin, rgbMax).toString(16);

    return `#${redComponent}${greenComponent}${blueComponent}`;
};

export default getRandomColor;
