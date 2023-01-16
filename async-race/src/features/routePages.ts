import drawGaragePage from '../pages/drawGaragePage';
import drawWinnersPage from '../pages/drawWinnersPage';
import draw404Page from '../pages/draw404Page';
import setHash from './setHash';

const routePages = () => {
    const { hash, pathname } = window.location;
    const page = hash.split('-')[0];

    if (pathname.length > 1) {
        draw404Page();
        return;
    }

    switch (page) {
        case '':
            setHash('#/');
            drawGaragePage();
            break;
        case '#/':
            drawGaragePage();
            break;
        case '#/winners':
            drawWinnersPage();
            break;
        default:
            draw404Page();
    }
};
export default routePages;
