import createCar from '../API/createCar';
import getRandomColor from '../components/getRandomColor';
import getRandomModel from '../components/getRandomModel';
import { generatedAmount } from '../data/constants';
import drawFooter from '../layouts/drawFooter';
import drawGarage from '../layouts/drawGarage';

const generateCars = async () => {
    const array = [];
    for (let i = 0; i < generatedAmount; i += 1) {
        array.push({ name: getRandomModel(), color: getRandomColor() });
    }
    console.log(array);
    array.forEach(async (el) => {
        createCar(el);
    });

    drawGarage();
    drawFooter();
};

export default generateCars;
