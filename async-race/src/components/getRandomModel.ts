import { brands, models } from '../data/randomData';

const getRandomModel = () => {
    const randomBrand = Math.floor(Math.random() * brands.length);
    const randomModel = Math.floor(Math.random() * models.length);
    return `${brands[randomBrand]} ${models[randomModel]}`;
};

export default getRandomModel;
