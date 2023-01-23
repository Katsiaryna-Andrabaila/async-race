import updateCar from '../API/updateCar';
import { NewCar } from '../data/types';
import drawFooter from '../layouts/drawFooter';
import drawGarage from '../layouts/drawGarage';
import state from '../data/state';

const chooseUpdateOptions = async (
    event: Event,
    id: number,
    carInput: HTMLInputElement,
    colorInput: HTMLInputElement
) => {
    const { target } = event;
    const carName = carInput;
    const carColor = colorInput;
    if (target instanceof HTMLButtonElement) {
        state.updateInputText = carName.value;
        state.updateColor = carColor.value;
        const body: NewCar = { name: carName.value, color: carColor.value };
        console.log(body, carName.value, carColor.value);
        updateCar(id, body);
        drawGarage();
        drawFooter();
        target.disabled = true;
        target.classList.add('inactive');
    }
    carName.disabled = true;
    carColor.disabled = true;
};

export default chooseUpdateOptions;
