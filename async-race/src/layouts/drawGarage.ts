import UI from '../data/UI';
import drawGarageControls from './drawGarageControls';
import drawRaceLines from './drawRaceLines';
import getCars from '../API/getCars';
import state from '../data/state';
import drawPageButtons from './drawPageButtons';

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

        drawPageButtons(pageButtons, Number(carsAmount));

        main.append(garageHeader, pageNumber, raceLines, pageButtons);
    });
};

export default drawGarage;
