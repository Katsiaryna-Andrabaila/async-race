import state from '../data/state';

const animateCar = (id: number, carItem: HTMLDivElement, flag: HTMLImageElement, time: number) => {
    const car = carItem;
    let distanceToDrive: number;
    let animationID = 0;
    if (flag instanceof HTMLImageElement && car instanceof HTMLDivElement) {
        distanceToDrive = flag.offsetLeft - car.offsetLeft + flag.width;
        console.log(distanceToDrive);
    }
    let start = 0;
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
            // console.log(state.animationID);
        }
    };

    window.requestAnimationFrame(step);

    console.log(state);
};

export default animateCar;
