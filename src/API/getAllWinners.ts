import UI from '../data/UI';
import { BASE_URL } from '../data/constants';
import { WinnersOnPage, Path } from '../data/types';

const getAllWinners = async (): Promise<WinnersOnPage> => {
    try {
        const response = await fetch(`${BASE_URL}${Path.winners}`);
        const winners = {
            items: await response.json(),
            amount: response.headers.get('X-Total-Count'),
        };
        return winners;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getAllWinners;
