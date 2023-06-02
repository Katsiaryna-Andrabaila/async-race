import { Path } from '../data/types';
import { BASE_URL } from '../data/constants';
import UI from '../data/UI';

const startEngine = async (id: number) => {
    try {
        return await (
            await fetch(`${BASE_URL}${Path.engine}?id=${id}&status=started`, {
                method: 'PATCH',
            })
        ).json();
    } catch {
        throw new Error(UI.errorMessage);
    }
};

export default startEngine;
