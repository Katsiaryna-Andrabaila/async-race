import { MILLISECONDS_IN_SECOND } from '../data/constants';

const showWinnerMessage = (carName: string, time: number) => {
    const visibleMessage = document.querySelector('.winner-message');
    if (visibleMessage) return;

    const messageText = `${carName} went first in ${(time / MILLISECONDS_IN_SECOND).toFixed(2)} seconds!`;
    const message = document.createElement('p');
    message.classList.add('winner-message');
    message.textContent = messageText;
    message.classList.add('visible');

    const main = document.querySelector('.main_garage');
    main?.append(message);
};

export default showWinnerMessage;
