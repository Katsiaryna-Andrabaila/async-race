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
import UI from '../data/UI';

const actGarage = (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLButtonElement) {
        const id = target.closest('.car-item')?.getAttribute('data-id');
        switch (target.textContent) {
            case UI.createButton:
                createCarListener();
                break;
            case UI.raceButton:
                startRace(target);
                break;
            case UI.resetButton:
                resetRace(target);
                break;
            case UI.generateButton:
                generateCars();
                break;
            case UI.selectButton:
                selectCar(Number(id), target);
                break;
            case UI.removeButton:
                deleteCarListener(Number(id));
                break;
            case UI.engineButton:
                driveCar(Number(id), target);
                break;
            case UI.stopButton:
                stopCar(Number(id), target);
                break;
            case UI.nextButton:
                drawNextPage(target);
                break;
            case UI.prevButton:
                drawPreviousPage(target);
                break;
            default:
                break;
        }
    }
};

export default actGarage;
