import getCars from '../API/getCars';
import UI from '../data/UI';
import drawCarControlBlock from './drawCarControlBlock';
import drawCar from './drawCar';
import { Car } from '../data/types';
import state from '../data/state';

const drawRaceLines = async (parent: HTMLDivElement) => {
    const cars = await getCars(state.page);
    cars.items.forEach((el: Car) => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');
        carItem.setAttribute('data-id', el.id.toString());

        drawCarControlBlock(carItem, el);

        const driveBlock = document.createElement('div');
        driveBlock.classList.add('drive-block');

        const engineBtn = document.createElement('button');
        engineBtn.classList.add('button', 'engine-button');
        engineBtn.textContent = UI.engineButton;

        const stopBtn = document.createElement('button');
        stopBtn.classList.add('button', 'stop-button');
        stopBtn.textContent = UI.stopButton;
        stopBtn.classList.add('inactive');

        const car = document.createElement('div');
        car.classList.add('car');
        car.setAttribute('data-car-img-id', el.id.toString());
        car.innerHTML = drawCar(el.color);

        const flag = document.createElement('img');
        flag.classList.add('flag');
        flag.src = './assets/icons/flag.svg';

        driveBlock.append(engineBtn, stopBtn, car, flag);
        carItem.append(driveBlock);
        parent.append(carItem);
    });
};

export default drawRaceLines;
