import UI from '../data/UI';
import { BASE_URL, LIMITS_PER_PAGES } from '../data/constants';
import { CarsOnPage, Path } from '../data/types';

const getCars = async (page: number, limit = LIMITS_PER_PAGES.garageLimitPerPage): Promise<CarsOnPage> => {
    try {
        const response = await fetch(`${BASE_URL}${Path.garage}?_page=${page}&_limit=${limit}`);
        const cars = {
            items: await response.json(),
            amount: response.headers.get('X-Total-Count'),
        };
        return cars;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getCars;
