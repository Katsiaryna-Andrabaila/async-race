import driveEngine from '../API/driveEngine';
import startEngine from '../API/startEngine';
import state from '../data/state';
import animateCar from './animateCar';

const driveCar = async (id: number, btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');
    if (btn.nextSibling instanceof HTMLButtonElement) {
        btn.nextSibling.classList.remove('inactive');
        btn.nextSibling.removeAttribute('disabled');
    }
    const raceBtn = <HTMLButtonElement>document.querySelector('.race-button');
    raceBtn.classList.add('inactive');

    const startResponse = await startEngine(id);
    const carTime = Math.round(startResponse.distance / startResponse.velocity);
    console.log(carTime);

    const car = btn.nextSibling?.nextSibling;
    const flag = car?.nextSibling;

    if (car instanceof HTMLDivElement && flag instanceof HTMLImageElement) {
        animateCar(id, car, flag, carTime);
    }

    const driveResponse = await driveEngine(id);
    if (!driveResponse.success) {
        window.cancelAnimationFrame(state.raceAnimationIDs[id]);
    }
};

export default driveCar;
