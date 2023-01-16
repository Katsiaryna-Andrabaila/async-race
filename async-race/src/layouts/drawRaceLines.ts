import UI from '../data/UI';
import drawCarControlBlock from './drawCarControlBlock';

const drawRaceLines = (parent: HTMLElement) => {
    drawCarControlBlock(parent);

    const driveBlock = document.createElement('div');
    driveBlock.classList.add('drive-block');

    const engineBtn = document.createElement('button');
    engineBtn.classList.add('button', 'engine-button');
    engineBtn.textContent = UI.engineButton;

    const driveBtn = document.createElement('button');
    driveBtn.classList.add('button', 'drive-button');
    driveBtn.textContent = UI.driveButton;

    const car = document.createElement('img');
    car.classList.add('car');
    car.src = './assets/icons/car.svg';
    car.alt = UI.carAltText;

    const flag = document.createElement('img');
    flag.classList.add('flag');
    flag.src = './assets/icons/flag.svg';
    flag.alt = UI.flagAltText;
    driveBlock.append(engineBtn, driveBtn, car, flag);
    parent.append(driveBlock);
};

export default drawRaceLines;
