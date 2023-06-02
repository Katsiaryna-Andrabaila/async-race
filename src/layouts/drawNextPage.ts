import state from '../data/state';
import drawFooter from './drawFooter';
import drawGarage from './drawGarage';
import drawWinnersTable from './drawWinnersTable';

const drawNextPage = async (btn: HTMLButtonElement, option?: string) => {
    if (btn.previousSibling instanceof HTMLButtonElement) {
        btn.previousSibling.removeAttribute('disabled');
        btn.previousSibling.classList.remove('inactive');
    }

    if (option === 'winners') {
        state.winnerPage += 1;
        drawWinnersTable();
        drawFooter();
    } else {
        state.page += 1;
        drawGarage();
        drawFooter();
    }
};

export default drawNextPage;
