import drawNextPage from '../layouts/drawNextPage';
import drawPreviousPage from '../layouts/drawPreviousPage';

const actWinners = (event: Event) => {
    const { target } = event;
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
