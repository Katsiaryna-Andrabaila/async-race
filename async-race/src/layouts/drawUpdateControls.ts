import UI from '../data/UI';

const drawUpdateControls = (parent: HTMLElement) => {
    const updateBlock = document.createElement('div');
    updateBlock.classList.add('update-block');

    const updateInput = document.createElement('input');
    updateInput.classList.add('input', 'car-input');
    updateInput.type = 'text';

    const updateColor = document.createElement('input');
    updateColor.classList.add('input', 'color-input');
    updateColor.type = 'color';

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('button', 'create-button');
    updateBtn.textContent = UI.updateButton;

    updateBlock.append(updateInput, updateColor, updateBtn);

    parent.append(updateBlock);
};

export default drawUpdateControls;
