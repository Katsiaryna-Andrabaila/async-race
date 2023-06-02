import { NewCar, Path } from '../data/types';
import { BASE_URL } from '../data/constants';
import UI from '../data/UI';

const updateCar = async (id: number, body: NewCar) => {
    try {
        (
            await fetch(`${BASE_URL}${Path.garage}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            })
        ).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default updateCar;
