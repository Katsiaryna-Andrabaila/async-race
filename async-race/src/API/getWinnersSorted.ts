import UI from '../data/UI';
import { BASE_URL, LIMITS_PER_PAGES } from '../data/constants';
import { WinnersOnPage, Path } from '../data/types';
import state from '../data/state';

const getWinnersSorted = async (
    page: number,
    sort = state.sort,
    order = state.order,
    limit = LIMITS_PER_PAGES.winnersLimitPerPage
): Promise<WinnersOnPage> => {
    try {
        const response = await fetch(
            `${BASE_URL}${Path.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
        );
        const winners = {
            items: await response.json(),
            amount: response.headers.get('X-Total-Count'),
        };
        console.log(winners.amount);
        return winners;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getWinnersSorted;
