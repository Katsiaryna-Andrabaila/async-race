import state from '../data/state';
import drawFooter from '../layouts/drawFooter';
import drawGarage from '../layouts/drawGarage';

const drawPreviousPage = (btn: HTMLButtonElement) => {
    if (btn.nextSibling instanceof HTMLButtonElement) {
        btn.nextSibling.removeAttribute('disabled');
        btn.nextSibling.classList.remove('inactive');
    }

    state.page -= 1;
    drawGarage();
    drawFooter();
};

export default drawPreviousPage;
