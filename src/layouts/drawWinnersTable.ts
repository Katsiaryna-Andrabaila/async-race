import UI from '../data/UI';
import drawWinnersTableFields from './drawWinnersTableFields';
import drawWinnersList from './drawWinnersList';
import state from '../data/state';
import getAllWinners from '../API/getAllWinners';
import drawWinnersPageButtons from './drawWinnersPageButtons';
import getWinnersSorted from '../API/getWinnersSorted';

const drawWinnersTable = async () => {
    document.querySelector('main')?.remove();
    document.querySelector('footer')?.remove();
    const main = document.createElement('main');
    main.classList.add('main', 'main_winners');
    document.body.append(main);

    const winnersHeader = document.createElement('h1');
    winnersHeader.classList.add('garage-header');

    const pageNumber = document.createElement('h3');
    pageNumber.classList.add('page-number');
    pageNumber.textContent = `Page #${state.winnerPage}`;
    main.append(winnersHeader, pageNumber);

    const table = document.createElement('div');
    table.classList.add('winners-table');

    drawWinnersTableFields(table);

    const winners = await getWinnersSorted(state.winnerPage);

    drawWinnersList(table, winners.items).then(async () => {
        const winnersAmount = (await getAllWinners()).items.length;
        winnersHeader.textContent = `${UI.winnersHeader}(${winnersAmount})`;

        const pageButtons = document.createElement('div');
        pageButtons.classList.add('page-buttons', 'winners-page-buttons');

        drawWinnersPageButtons(pageButtons, winnersAmount);

        main.append(table, pageButtons);
    });
};

export default drawWinnersTable;
