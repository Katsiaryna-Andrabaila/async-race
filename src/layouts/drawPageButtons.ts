import state from '../data/state';
import { LIMITS_PER_PAGES } from '../data/constants';
import UI from '../data/UI';

const drawPageButtons = (parent: HTMLDivElement, carsAmount: number) => {
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('button', 'prev-page-button');
    prevBtn.textContent = UI.prevButton;
    if (state.page === 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add('inactive');
    }

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('button', 'next-page-button');
    nextBtn.textContent = UI.nextButton;
    if (
        carsAmount <= Number(LIMITS_PER_PAGES.garageLimitPerPage) ||
        LIMITS_PER_PAGES.garageLimitPerPage * state.page >= carsAmount
    ) {
        nextBtn.disabled = true;
        nextBtn.classList.add('inactive');
    }
    parent.append(prevBtn, nextBtn);
};

export default drawPageButtons;
