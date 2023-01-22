import UI from '../data/UI';
import drawGarageControls from './drawGarageControls';
import drawRaceLines from './drawRaceLines';
import getCars from '../API/getCars';
import state from '../data/state';
import { LIMITS_PER_PAGES } from '../data/constants';

const drawGarage = async () => {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();
    const main = document.createElement('main');
    main.classList.add('main', 'main_garage');
    document.body.append(main);
    drawGarageControls(main);

    const garageHeader = document.createElement('h1');
    garageHeader.classList.add('garage-header');

    const pageNumber = document.createElement('h3');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = `Page #${state.page.toString()}`;

    const raceLines = document.createElement('div');
    raceLines.classList.add('race-lines');
    drawRaceLines(raceLines).then(async () => {
        const carsAmount = (await getCars(state.page)).amount;
        garageHeader.textContent = `${UI.garageHeader}(${carsAmount})`;
        const pageButtons = document.createElement('div');
        pageButtons.classList.add('page-buttons');

        const prevBtn = document.createElement('button');
        prevBtn.classList.add('button', 'prev-page-button');
        prevBtn.textContent = UI.prevButton;
        prevBtn.disabled = true;
        prevBtn.classList.add('inactive');

        const nextBtn = document.createElement('button');
        nextBtn.classList.add('button', 'next-page-button');
        nextBtn.textContent = UI.nextButton;
        if (carsAmount && Number(carsAmount) <= Number(LIMITS_PER_PAGES.garageLimitPerPage)) {
            nextBtn.disabled = true;
            nextBtn.classList.add('inactive');
        }
        pageButtons.append(prevBtn, nextBtn);
        main.append(garageHeader, pageNumber, raceLines, pageButtons);
    });
};

export default drawGarage;
