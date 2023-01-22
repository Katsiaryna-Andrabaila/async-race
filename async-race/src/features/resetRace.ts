import getCars from '../API/getCars';
import state from '../data/state';
import disableStopButtons from './disableStopButtons';
import stopEngine from '../API/stopEngine';

const resetRace = async (btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');

    const cars = await getCars(state.page);
    const carsOnPage = <NodeListOf<HTMLDivElement>>document.querySelectorAll('.car');
    disableStopButtons();
    cars.items.forEach(async (el) => {
        await stopEngine(el.id);
        let targetCar = carsOnPage[0];
        carsOnPage.forEach((item) => {
            if (item.getAttribute('data-car-img-id') === el.id.toString()) {
                targetCar = item;
            }
        });
        if (targetCar instanceof HTMLDivElement) {
            targetCar.style.transform = `translateX(0)`;
            window.cancelAnimationFrame(state.raceAnimationIDs[el.id]);
        }
        if (btn.previousSibling instanceof HTMLButtonElement) {
            btn.previousSibling.classList.remove('inactive');
            btn.previousSibling.removeAttribute('disabled');
        }
    });
};

export default resetRace;
