import UI from '../data/UI';
import winners from '../data/winners';
import drawWinnersTableFields from './drawWinnersTableFields';
import drawWinnersList from './drawWinnersList';

const drawWinnersTable = () => {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();
    const main = document.createElement('main');
    main.classList.add('main', 'main_winners');
    document.body.append(main);

    const winnersHeader = document.createElement('h1');
    winnersHeader.classList.add('garage-header');
    winnersHeader.textContent = `${UI.winnersHeader}(${winners.length})`;
    const pageNumber = document.createElement('h3');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = UI.pageNumber;
    main.append(winnersHeader, pageNumber);

    const table = document.createElement('div');
    table.classList.add('winners-table');

    drawWinnersTableFields(table);
    drawWinnersList(table);

    const pageButtons = document.createElement('div');
    pageButtons.classList.add('page-buttons');
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('button', 'prev-page-button');
    prevBtn.textContent = UI.prevButton;
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('button', 'next-page-button');
    nextBtn.textContent = UI.nextButton;
    pageButtons.append(prevBtn, nextBtn);
    main.append(table, pageButtons);
};

export default drawWinnersTable;
