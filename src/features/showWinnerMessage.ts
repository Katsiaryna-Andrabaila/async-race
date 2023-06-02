import { MILLISECONDS_IN_SECOND } from '../data/constants';
import { Car } from '../data/types';
import processWinner from './processWinner';

const showWinnerMessage = (car: Car, time: number) => {
    const visibleMessage = document.querySelector('.winner-message');
    const raceBtn = <HTMLButtonElement>document.querySelector('.race-button');
    if (visibleMessage || !raceBtn.classList.contains('inactive')) return;
    processWinner(car, time);

    const messageText = `${car.name} went first in ${(time / MILLISECONDS_IN_SECOND).toFixed(2)} seconds!`;
    const message = document.createElement('p');
    message.classList.add('winner-message');
    message.textContent = messageText;
    message.classList.add('visible');

    const main = document.querySelector('.main_garage');
    main?.append(message);
};

export default showWinnerMessage;
