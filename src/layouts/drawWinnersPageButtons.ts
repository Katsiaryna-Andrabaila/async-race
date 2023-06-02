import state from '../data/state';
import { LIMITS_PER_PAGES } from '../data/constants';
import UI from '../data/UI';

const drawWinnersPageButtons = (parent: HTMLDivElement, winnersAmount: number) => {
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('button', 'winners-prev-page-button');
    prevBtn.textContent = UI.prevButton;

    if (state.winnerPage === 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add('inactive');
    }

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('button', 'winners-next-page-button');
    nextBtn.textContent = UI.nextButton;

    if (
        winnersAmount <= Number(LIMITS_PER_PAGES.winnersLimitPerPage) ||
        LIMITS_PER_PAGES.winnersLimitPerPage * state.winnerPage >= winnersAmount
    ) {
        nextBtn.disabled = true;
        nextBtn.classList.add('inactive');
    }

    parent.append(prevBtn, nextBtn);
};

export default drawWinnersPageButtons;
