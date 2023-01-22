import UI from '../data/UI';

const drawCreateControls = (parent: HTMLElement) => {
    const createBlock = document.createElement('form');
    createBlock.classList.add('create-block');

    const createInput = document.createElement('input');
    createInput.classList.add('input', 'car-input', 'car-create-input');
    createInput.type = 'text';

    const createColor = document.createElement('input');
    createColor.classList.add('input', 'color-input', 'color-create-input');
    createColor.type = 'color';

    const createBtn = document.createElement('button');
    createBtn.classList.add('button', 'create-button');
    createBtn.textContent = UI.createButton;

    createBlock.append(createInput, createColor, createBtn);

    parent.append(createBlock);
};

export default drawCreateControls;
