import UI from '../data/UI';

const drawUpdateControls = (parent: HTMLElement) => {
    const updateBlock = document.createElement('form');
    updateBlock.classList.add('update-block');

    const updateInput = document.createElement('input');
    updateInput.classList.add('input', 'car-input', 'car-update-input');
    updateInput.type = 'text';
    updateInput.disabled = true;

    const updateColor = document.createElement('input');
    updateColor.classList.add('input', 'color-input', 'color-update-input');
    updateColor.type = 'color';
    updateColor.disabled = true;

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('button', 'update-button', 'inactive');
    updateBtn.textContent = UI.updateButton;
    updateBtn.disabled = true;

    updateBlock.append(updateInput, updateColor, updateBtn);

    parent.append(updateBlock);
};

export default drawUpdateControls;
