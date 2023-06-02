import { Path, Winner } from '../data/types';
import { BASE_URL } from '../data/constants';
import UI from '../data/UI';

const updateWinner = async (id: number, body: Winner) => {
    try {
        (
            await fetch(`${BASE_URL}${Path.winners}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
        ).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default updateWinner;
