import { BASE_URL } from '../data/constants';
import { Path } from '../data/types';
import UI from '../data/UI';

const getWinnerStatus = async (id: number) => {
    try {
        return (await fetch(`${BASE_URL}${Path.winners}/${id}`)).status;
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default getWinnerStatus;
