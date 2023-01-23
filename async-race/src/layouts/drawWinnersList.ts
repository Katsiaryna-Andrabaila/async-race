import getAllCars from '../API/getAllCars';
import getWinners from '../API/getWinners';
import { LIMITS_PER_PAGES, winnersTableCarHeight } from '../data/constants';
import state from '../data/state';
import { Car } from '../data/types';
import drawCar from './drawCar';

const drawWinnersList = async (parent: HTMLDivElement) => {
    const garage = await getAllCars();
    const winners = await getWinners(state.winnerPage);
    winners.items.forEach((el) => {
        const winnerLine = document.createElement('div');
        winnerLine.classList.add('winner-line');

        const winnerPosition = document.createElement('span');
        winnerPosition.textContent = (
            winners.items.indexOf(el) +
            1 +
            LIMITS_PER_PAGES.winnersLimitPerPage * (state.winnerPage - 1)
        ).toString();

        let targetCar: Car = garage.items[0];
        garage.items.forEach((item) => {
            if (el.id === item.id) {
                targetCar = item;
            }
        });

        const winnerImg = document.createElement('div');
        winnerImg.classList.add('winner-image');
        winnerImg.innerHTML = drawCar(targetCar.color, winnersTableCarHeight);

        const winnerName = document.createElement('span');
        if (targetCar) {
            winnerName.textContent = targetCar.name;
        }

        const winnerWins = document.createElement('span');
        winnerWins.textContent = el.wins.toString();

        const winnerTime = document.createElement('span');
        winnerTime.textContent = el.time.toString();

        winnerLine.append(winnerPosition, winnerImg, winnerName, winnerWins, winnerTime);
        parent.append(winnerLine);
    });
};

export default drawWinnersList;
