import resetRace from './resetRace';
import startRace from './startRace';
import generateCars from './generateCars';
import drawGarage from '../layouts/drawGarage';
import selectCar from './selectCar';
import deleteCar from '../API/deleteCar';
import driveCar from './driveCar';
import stopCar from './stopCar';
import drawFooter from '../layouts/drawFooter';
import createCarListener from './createCarListener';

const act = (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLButtonElement) {
        const id = target.closest('.car-item')?.getAttribute('data-id');
        if (target.classList.contains('create-button')) {
            createCarListener();
        }
        if (target.classList.contains('race-button')) {
            startRace(target);
        }
        if (target.classList.contains('reset-button')) {
            resetRace(target);
        }
        if (target.classList.contains('generate-button')) {
            generateCars();
        }
        if (target.classList.contains('select-button')) {
            selectCar(Number(id), target);
        }
        if (target.classList.contains('remove-button')) {
            deleteCar(Number(id));
            drawGarage();
            drawFooter();
        }
        if (target.classList.contains('engine-button')) {
            driveCar(Number(id), target);
        }
        if (target.classList.contains('stop-button')) {
            stopCar(Number(id), target);
        }
    }
};

export default act;
