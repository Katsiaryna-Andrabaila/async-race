import UI from '../data/UI';
import drawCreateControls from './drawCreateControls';
import drawUpdateControls from './drawUpdateControls';

const drawGarageControls = (parent: HTMLElement) => {
    const controls = document.createElement('section');
    controls.classList.add('garage-controls');

    drawCreateControls(controls);
    drawUpdateControls(controls);

    const raceBtn = document.createElement('button');
    raceBtn.classList.add('button', 'race-button');
    raceBtn.textContent = UI.raceButton;

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('button', 'reset-button');
    resetBtn.textContent = UI.resetButton;
    resetBtn.setAttribute('disabled', 'disabled');
    resetBtn.classList.add('inactive');

    const generateBtn = document.createElement('button');
    generateBtn.classList.add('button', 'generate-button');
    generateBtn.textContent = UI.generateButton;

    controls.append(raceBtn, resetBtn, generateBtn);
    parent.append(controls);
};

export default drawGarageControls;
