import UI from '../data/UI';
import drawGarageControls from './drawGarageControls';
import drawRaceLines from './drawRaceLines';

const drawGarage = () => {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();

    const main = document.createElement('main');
    main.classList.add('main', 'main_garage');
    document.body.append(main);

    drawGarageControls(main);

    const garageHeader = document.createElement('h1');
    garageHeader.classList.add('garage-header');
    garageHeader.textContent = UI.garageHeader;

    const pageNumber = document.createElement('h3');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = UI.pageNumber;
    main.append(garageHeader, pageNumber);

    drawRaceLines(main);

    const pageButtons = document.createElement('div');
    pageButtons.classList.add('page-buttons');

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('button', 'prev-page-button');
    prevBtn.textContent = UI.prevButton;

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('button', 'next-page-button');
    nextBtn.textContent = UI.nextButton;
    pageButtons.append(prevBtn, nextBtn);
    main.append(pageButtons);
};

export default drawGarage;
