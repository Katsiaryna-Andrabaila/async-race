import UI from '../data/UI';

const drawCarControlBlock = (parent: HTMLElement) => {
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
    carName.textContent = 'Tesla';

    carControlBlock.append(selectBtn, removeBtn, carName);

    parent.append(carControlBlock);
};

export default drawCarControlBlock;
