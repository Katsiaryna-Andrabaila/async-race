import drawFooter from '../layouts/drawFooter';
import drawWinnersTable from '../layouts/drawWinnersTable';
import drawHeader from '../layouts/drawHeader';

const drawWinnersPage = () => {
    drawHeader();

    drawWinnersTable();

    drawFooter();
};

export default drawWinnersPage;
