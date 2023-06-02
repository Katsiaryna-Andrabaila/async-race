import state from '../data/state';
import drawNextPage from '../layouts/drawNextPage';
import drawPreviousPage from '../layouts/drawPreviousPage';
import sortWinners from './sortWinners';

const actWinners = (event: Event) => {
    const { target } = event;
    if (target instanceof HTMLSpanElement) {
        if (target.classList.contains('wins-field')) {
            sortWinners('wins', target);
            state.sort = 'wins';
        }
        if (target.classList.contains('time-field')) {
            sortWinners('time', target);
            state.sort = 'time';
        }
    }
    if (target instanceof HTMLButtonElement) {
        if (target.classList.contains('winners-prev-page-button')) {
            drawPreviousPage(target, 'winners');
        }
        if (target.classList.contains('winners-next-page-button')) {
            drawNextPage(target, 'winners');
        }
    }
};

export default actWinners;
