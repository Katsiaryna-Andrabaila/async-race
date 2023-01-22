import state from '../data/state';
import drawFooter from '../layouts/drawFooter';
import drawGarage from '../layouts/drawGarage';

const drawNextPage = async (btn: HTMLButtonElement) => {
    if (btn.previousSibling instanceof HTMLButtonElement) {
        btn.previousSibling.removeAttribute('disabled');
        btn.previousSibling.classList.remove('inactive');
    }

    state.page += 1;
    drawGarage();
    drawFooter();
};

export default drawNextPage;
