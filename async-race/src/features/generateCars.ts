import createCar from '../API/createCar';
import { getRandomColor, getRandomModel } from '../services/utils';
import { GENERATED_AMOUNT } from '../data/constants';
import drawFooter from '../layouts/drawFooter';
import drawGarage from '../layouts/drawGarage';

const generateCars = async () => {
    const array = [];
    for (let i = 0; i < GENERATED_AMOUNT; i += 1) {
        array.push({ name: getRandomModel(), color: getRandomColor() });
    }

    array.forEach(async (el) => {
        createCar(el);
    });

    drawGarage();
    drawFooter();
};

export default generateCars;
