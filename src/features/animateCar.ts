import getCar from '../API/getCar';
import state from '../data/state';
import showWinnerMessage from './showWinnerMessage';

const animateCar = async (id: number, carItem: HTMLDivElement, flag: HTMLImageElement, time: number) => {
    const car = carItem;
    let distanceToDrive: number;
    let animationID = 0;
    if (flag instanceof HTMLImageElement && car instanceof HTMLDivElement) {
        distanceToDrive = flag.offsetLeft - car.offsetLeft + flag.width;
    }
    let start = 0;
    const targetCar = await getCar(id);

    const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const backDistance = Math.round(progress * (distanceToDrive / time));
        if (car instanceof HTMLDivElement) {
            car.style.transform = `translateX(${Math.min(backDistance, distanceToDrive)}px)`;
        }

        if (backDistance < distanceToDrive) {
            animationID = window.requestAnimationFrame(step);
            state.raceAnimationIDs[id] = animationID;
        } else if (targetCar) {
            showWinnerMessage(targetCar, time);
        }
    };
    window.requestAnimationFrame(step);
};

export default animateCar;
