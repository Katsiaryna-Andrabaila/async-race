import UI from '../data/UI';
import { BASE_URL, LIMITS_PER_PAGES } from '../data/constants';
import { WinnersOnPage, Path } from '../data/types';

const getWinners = async (page: number, limit = LIMITS_PER_PAGES.winnersLimitPerPage): Promise<WinnersOnPage> => {
    try {
        const response = await fetch(`${BASE_URL}${Path.winners}?_page=${page}&_limit=${limit}`);
        const winners = {
            items: await response.json(),
            amount: response.headers.get('X-Total-Count'),
        };
        return winners;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getWinners;
