import { brands, models } from '../data/randomData';

export const getRandomModel = () => {
    const randomBrand = Math.floor(Math.random() * brands.length);
    const randomModel = Math.floor(Math.random() * models.length);
    return `${brands[randomBrand]} ${models[randomModel]}`;
};

export const getRandomColor = () => {
    const getRandom = (min: number, max: number) => Math.ceil(Math.random() * (max - min) + min);
    const rgbMin = 0;
    const rgbMax = 255;

    const redComponent = getRandom(rgbMin, rgbMax).toString(16);
    const greenComponent = getRandom(rgbMin, rgbMax).toString(16);
    const blueComponent = getRandom(rgbMin, rgbMax).toString(16);

    return `#${redComponent}${greenComponent}${blueComponent}`;
};
