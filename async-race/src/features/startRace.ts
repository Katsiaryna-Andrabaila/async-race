import getCars from '../API/getCars';
import startEngine from '../API/startEngine';
import state from '../data/state';
import animateCar from './animateCar';
import driveEngine from '../API/driveEngine';
import disableStartButtons from './disableStartButtons';

const startRace = async (btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');

    const cars = await getCars(state.page);
    const carsOnPage = <NodeListOf<HTMLDivElement>>document.querySelectorAll('.car');
    const promises: Promise<{ velocity: number; distance: number }>[] = [];
    cars.items.forEach(async (el) => promises.push(startEngine(el.id)));
    Promise.all(promises).then(() => {
        disableStartButtons();
        cars.items.forEach(async (el) => {
            const startResponse = await promises[cars.items.indexOf(el)];
            const carTime = Math.round(startResponse.distance / startResponse.velocity);
            let targetCar = carsOnPage[0];
            carsOnPage.forEach((item) => {
                if (item.getAttribute('data-car-img-id') === el.id.toString()) {
                    targetCar = item;
                }
            });

            const flag = targetCar?.nextSibling;
            if (flag instanceof HTMLImageElement) {
                animateCar(el.id, targetCar, flag, carTime);
            }
            const driveResponse = await driveEngine(el.id);
            if (!driveResponse.success) {
                window.cancelAnimationFrame(state.raceAnimationIDs[el.id]);
            }
            if (btn.nextSibling instanceof HTMLButtonElement) {
                btn.nextSibling.classList.remove('inactive');
                btn.nextSibling.removeAttribute('disabled');
            }
        });
    });
};

export default startRace;
