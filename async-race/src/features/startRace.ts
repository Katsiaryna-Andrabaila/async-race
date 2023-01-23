import getCars from '../API/getCars';
import startEngine from '../API/startEngine';
import state from '../data/state';
import animateCar from './animateCar';
import driveEngine from '../API/driveEngine';
import disableStartButtons from './disableStartButtons';
// import { LIMITS_PER_PAGES } from '../data/constants';

const startRace = async (btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');

    const cars = await getCars(state.page);
    console.log(cars);
    const carsOnPage = <NodeListOf<HTMLDivElement>>document.querySelectorAll('.car');
    let targetCar = carsOnPage[0];
    const startPromises: Promise<{ velocity: number; distance: number }>[] = [];
    cars.items.forEach((el) => startPromises.push(startEngine(el.id)));
    Promise.all(startPromises).then(() => {
        disableStartButtons();
        cars.items.forEach(async (el) => {
            const startResponse = await startPromises[cars.items.indexOf(el)];
            const carTime = Math.round(startResponse.distance / startResponse.velocity);

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
