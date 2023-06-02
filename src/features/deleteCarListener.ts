import deleteCar from '../API/deleteCar';
import deleteWinner from '../API/deleteWinner';
import drawGarage from '../layouts/drawGarage';
import drawFooter from '../layouts/drawFooter';
import getCars from '../API/getCars';
import state from '../data/state';

const deleteCarListener = async (id: number) => {
    deleteCar(id);
    deleteWinner(id);

    if ((await getCars(state.page)).items.length === 0) {
        state.page -= 1;
        drawGarage();
        drawFooter();
    }
    drawGarage();
    drawFooter();
};

export default deleteCarListener;
