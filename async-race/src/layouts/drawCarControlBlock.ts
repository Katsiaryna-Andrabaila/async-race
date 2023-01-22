import { Car } from '../data/types';
import UI from '../data/UI';

const drawCarControlBlock = async (parent: HTMLElement, car: Car) => {
    const carControlBlock = document.createElement('div');
    carControlBlock.classList.add('car-controls');

    const selectBtn = document.createElement('button');
    selectBtn.classList.add('button', 'select-button');
    selectBtn.textContent = UI.selectButton;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('button', 'remove-button');
    removeBtn.textContent = UI.removeButton;

    const carName = document.createElement('p');
    carName.classList.add('car-name');
    carName.textContent = car.name;

    carControlBlock.append(selectBtn, removeBtn, carName);

    parent.append(carControlBlock);
};

export default drawCarControlBlock;
