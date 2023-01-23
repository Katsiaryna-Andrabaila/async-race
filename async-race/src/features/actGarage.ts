import resetRace from './resetRace';
import startRace from './startRace';
import generateCars from './generateCars';
import selectCar from './selectCar';
import driveCar from './driveCar';
import stopCar from './stopCar';
import createCarListener from './createCarListener';
import drawNextPage from '../layouts/drawNextPage';
import drawPreviousPage from '../layouts/drawPreviousPage';
import deleteCarListener from './deleteCarListener';

const actGarage = (event: Event) => {
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
            deleteCarListener(Number(id));
        }
        if (target.classList.contains('engine-button')) {
            driveCar(Number(id), target);
        }
        if (target.classList.contains('stop-button')) {
            stopCar(Number(id), target);
        }
        if (target.classList.contains('next-page-button')) {
            drawNextPage(target);
        }
        if (target.classList.contains('prev-page-button')) {
            drawPreviousPage(target);
        }
    }
};

export default actGarage;
