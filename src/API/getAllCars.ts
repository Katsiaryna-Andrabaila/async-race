import UI from '../data/UI';
import { BASE_URL } from '../data/constants';
import { CarsOnPage, Path } from '../data/types';

const getAllCars = async (): Promise<CarsOnPage> => {
    try {
        const response = await fetch(`${BASE_URL}${Path.garage}`);
        const cars = {
            items: await response.json(),
            amount: response.headers.get('X-Total-Count'),
        };
        return cars;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getAllCars;
