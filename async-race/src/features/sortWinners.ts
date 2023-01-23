import getWinnersSorted from '../API/getWinnersSorted';
import state from '../data/state';
import drawWinnersList from '../layouts/drawWinnersList';
import drawWinnersTableFields from '../layouts/drawWinnersTableFields';

const sortWinners = async (option: string, field: HTMLSpanElement) => {
    const winnersList = <HTMLDivElement>document.querySelector('.winners-table');
    state.sort = option;
    if ((!field.textContent?.includes('↓') && !field.textContent?.includes('↑')) || field.textContent?.includes('↓')) {
        state.order = 'ASC';
    }
    if (field.textContent?.includes('↑')) {
        state.order = 'DESC';
    }

    const winners = await getWinnersSorted(state.winnerPage);
    winnersList.innerHTML = '';
    drawWinnersTableFields(winnersList);
    drawWinnersList(winnersList, winners.items);
};

export default sortWinners;
