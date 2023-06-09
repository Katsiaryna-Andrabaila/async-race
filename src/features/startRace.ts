import getCars from '../API/getCars';
import startEngine from '../API/startEngine';
import state from '../data/state';
import animateCar from './animateCar';
import driveEngine from '../API/driveEngine';
import disableStartButtons from './disableStartButtons';
import { RaceParams } from '../data/types';
import drivingCars from '../data/drivingCars';

const startRace = async (btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');
    const winnersBtn = <HTMLButtonElement>document.querySelector('.winners-button');
    winnersBtn.disabled = true;
    const cars = await getCars(state.page);
    const carsImagesOnPage = <NodeListOf<HTMLDivElement>>document.querySelectorAll('.car');
    const startPromises: Promise<RaceParams>[] = [];
    cars.items.forEach(async (el) => startPromises.push(startEngine(el.id)));
    Promise.all(startPromises).then(() => {
        if (startPromises.length === Number(cars.items.length)) {
            disableStartButtons();
            cars.items.forEach(async (el) => {
                const startResponse = await startPromises[cars.items.indexOf(el)];
                const carTime = Math.round(startResponse.distance / startResponse.velocity);
                let targetCar = carsImagesOnPage[0];
                carsImagesOnPage.forEach((item) => {
                    if (item.getAttribute('data-car-img-id') === el.id.toString()) {
                        targetCar = item;
                    }
                });
                const flag = <HTMLImageElement>targetCar?.nextSibling;
                animateCar(el.id, targetCar, flag, carTime);

                const driveResponse = await driveEngine(el.id);
                if (!driveResponse.success) {
                    window.cancelAnimationFrame(state.raceAnimationIDs[el.id]);
                }
                drivingCars.push(el);
                if (drivingCars.length === carsImagesOnPage.length) {
                    if (btn.nextSibling instanceof HTMLButtonElement) {
                        btn.nextSibling.classList.remove('inactive');
                        btn.nextSibling.removeAttribute('disabled');
                        winnersBtn.disabled = false;
                    }
                }
            });
        }
    });
};

export default startRace;
