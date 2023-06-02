import state from '../data/state';
import drawFooter from './drawFooter';
import drawGarage from './drawGarage';
import drawWinnersTable from './drawWinnersTable';

const drawPreviousPage = (btn: HTMLButtonElement, option?: string) => {
    if (btn.nextSibling instanceof HTMLButtonElement) {
        btn.nextSibling.removeAttribute('disabled');
        btn.nextSibling.classList.remove('inactive');
    }

    if (option === 'winners') {
        state.winnerPage -= 1;
        drawWinnersTable();
        drawFooter();
    } else {
        state.page -= 1;
        drawGarage();
        drawFooter();
    }
};

export default drawPreviousPage;
