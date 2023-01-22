import createCar from '../API/createCar';
import { NewCar } from '../data/types';
import drawGarage from '../layouts/drawGarage';
import drawFooter from '../layouts/drawFooter';

const createCarListener = async () => {
    const carName = document.querySelector('.car-create-input');
    const carColor = document.querySelector('.color-create-input');
    if (carName instanceof HTMLInputElement && carColor instanceof HTMLInputElement && carName.value !== '') {
        const body: NewCar = { name: carName.value, color: carColor.value };
        createCar(body);
        drawGarage();
        drawFooter();
    }
};

export default createCarListener;
