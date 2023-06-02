import { BASE_URL } from '../data/constants';
import { Car, Path } from '../data/types';
import UI from '../data/UI';

const getCar = async (id: number): Promise<Car> => {
    try {
        return await (await fetch(`${BASE_URL}${Path.garage}/${id}`)).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getCar;
