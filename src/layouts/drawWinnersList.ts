import getCar from '../API/getCar';
import { LIMITS_PER_PAGES, WINNERS_TABLE_CAR_HEIGHT } from '../data/constants';
import state from '../data/state';
import { Winner } from '../data/types';
import drawCar from './drawCar';

const drawWinnersList = async (parent: HTMLDivElement, winners: Winner[]) => {
    winners.forEach(async (el) => {
        const winnerLine = document.createElement('div');
        winnerLine.classList.add('winner-line');

        const winnerPosition = document.createElement('span');
        winnerPosition.textContent = (
            winners.indexOf(el) +
            1 +
            LIMITS_PER_PAGES.winnersLimitPerPage * (state.winnerPage - 1)
        ).toString();

        const targetCar = await getCar(el.id);

        const winnerImg = document.createElement('div');
        winnerImg.classList.add('winner-image');
        winnerImg.innerHTML = drawCar(targetCar.color, WINNERS_TABLE_CAR_HEIGHT);

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
