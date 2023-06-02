import stopEngine from '../API/stopEngine';
import state from '../data/state';

const stopCar = async (id: number, btn: HTMLButtonElement) => {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('inactive');
    if (btn.previousSibling instanceof HTMLButtonElement) {
        btn.previousSibling.classList.remove('inactive');
        btn.previousSibling.removeAttribute('disabled');
    }

    await stopEngine(id);
    const car = btn.nextSibling;
    if (car instanceof HTMLDivElement) {
        car.style.transform = `translateX(0)`;
        window.cancelAnimationFrame(state.raceAnimationIDs[id]);
    }

    const winnerMessage = <HTMLParagraphElement>document.querySelector('.winner-message');
    if (winnerMessage) winnerMessage.remove();

    const stopButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.stop-button');
    const stopButtonsArray: HTMLButtonElement[] = [];
    const raceBtn = <HTMLButtonElement>document.querySelector('.race-button');
    const resetBtn = <HTMLButtonElement>document.querySelector('.reset-button');
    stopButtons.forEach((el) => stopButtonsArray.push(el));
    if (stopButtonsArray.every((el) => el.classList.contains('inactive'))) {
        raceBtn.classList.remove('inactive');
        raceBtn.disabled = false;
        resetBtn.classList.add('inactive');
        resetBtn.disabled = true;
    }
};

export default stopCar;
