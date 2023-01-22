import createWinner from '../API/createWinner';
import getWinner from '../API/getWinner';
import getWinnerStatus from '../API/getWinnerStatus';
import updateWinner from '../API/updateWinner';
import { Car } from '../data/types';

const processWinner = async (car: Car, time: number) => {
    console.log(car);
    const body = { id: car.id, wins: 1, time };
    const winnerStatus = await getWinnerStatus(car.id);
    if (winnerStatus !== 200) {
        await createWinner(body);
    } else {
        const winner = await getWinner(car.id);
        const newWins = winner.wins + 1;
        if (time < winner.time) {
            await updateWinner(car.id, { id: car.id, wins: newWins, time });
        } else {
            await updateWinner(car.id, { id: car.id, wins: winner.wins, time });
        }
    }
};

export default processWinner;
