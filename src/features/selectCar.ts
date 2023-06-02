import chooseUpdateOptions from './chooseUpdateOptions';
import getCars from '../API/getCars';
import { Car } from '../data/types';

const selectCar = async (id: number, btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');
    if (btn.nextSibling instanceof HTMLButtonElement) {
        btn.nextSibling.classList.add('inactive');
        btn.nextSibling.setAttribute('disabled', 'disabled');
    }
    const updateForm = document.querySelector('.update-block');
    if (updateForm) {
        const [carInput, colorInput, updateBtn] = updateForm.children;
        if (
            carInput instanceof HTMLInputElement &&
            colorInput instanceof HTMLInputElement &&
            updateBtn instanceof HTMLButtonElement
        ) {
            carInput.disabled = false;
            colorInput.disabled = false;
            updateBtn.disabled = false;
            updateBtn.classList.remove('inactive');
            const cars = await getCars(1);
            let targetCar: Car = cars.items[0];
            cars.items.forEach((el) => {
                if (el.id === id) {
                    targetCar = el;
                }
            });
            carInput.value = targetCar.name;
            colorInput.value = targetCar.color;
            updateBtn.addEventListener('click', (e) => {
                chooseUpdateOptions(e, id, carInput, colorInput);
            });
        }
    }
};

export default selectCar;
