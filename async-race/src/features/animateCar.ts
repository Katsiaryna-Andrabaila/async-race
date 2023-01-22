import getCars from '../API/getCars';
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
    const cars = await getCars(state.page);
    let name = '';
    cars.items.forEach((el) => {
        if (el.id === id) {
            name = el.name;
        }
    });
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
        } else if (name) {
            showWinnerMessage(name, time);
        }
    };

    window.requestAnimationFrame(step);

    console.log(state);
};

export default animateCar;
