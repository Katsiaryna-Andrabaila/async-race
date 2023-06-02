import drawGaragePage from '../pages/drawGaragePage';
import drawWinnersPage from '../pages/drawWinnersPage';

const routePages = () => {
    const { hash } = window.location;
    const page = hash.split('-')[0];

    switch (page) {
        case '':
            drawGaragePage();
            break;
        case '#/':
            drawGaragePage();
            break;
        case '#/winners':
            drawWinnersPage();
            break;
        default:
            drawGaragePage();
    }
};
export default routePages;
