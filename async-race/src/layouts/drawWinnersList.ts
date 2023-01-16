import winners from '../data/winners';
import garage from '../data/garage';
import { Car } from '../data/types';

const drawWinnersList = (parent: HTMLDivElement) => {
    winners.forEach((el) => {
        const winnerLine = document.createElement('div');
        winnerLine.classList.add('winner-line');

        const winnerPosition = document.createElement('span');
        winnerPosition.textContent = (winners.indexOf(el) + 1).toString();

        const winnerImg = document.createElement('img');
        winnerImg.classList.add('winner-image');
        winnerImg.src = './assets/icons/car.svg';

        let targetCar: Car = garage[0];
        garage.forEach((item) => {
            if (el.id === item.id) {
                targetCar = item;
            }
        });

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
