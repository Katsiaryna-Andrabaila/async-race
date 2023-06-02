import { BASE_URL } from '../data/constants';
import { Path } from '../data/types';
import UI from '../data/UI';

const deleteWinner = async (id: number) => {
    try {
        (
            await fetch(`${BASE_URL}${Path.winners}/${id}`, {
                method: 'DELETE',
            })
        ).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default deleteWinner;
