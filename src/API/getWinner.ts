import { BASE_URL } from '../data/constants';
import { Path, Winner } from '../data/types';
import UI from '../data/UI';

const getWinner = async (id: number): Promise<Winner> => {
    try {
        return await (await fetch(`${BASE_URL}${Path.winners}/${id}`)).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getWinner;
