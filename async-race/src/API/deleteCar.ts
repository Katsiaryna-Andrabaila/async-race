import { Path } from '../data/types';
import { BASE_URL } from '../data/constants';
import UI from '../data/UI';

const deleteCar = async (id: number) => {
    try {
        (
            await fetch(`${BASE_URL}${Path.garage}/${id}`, {
                method: 'DELETE',
            })
        ).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default deleteCar;
