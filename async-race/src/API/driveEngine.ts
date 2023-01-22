import { Path } from '../data/types';
import { BASE_URL } from '../data/constants';

const driveEngine = async (id: number) => {
    const response = await fetch(`${BASE_URL}${Path.engine}?id=${id}&status=drive`, {
        method: 'PATCH',
    }).catch();
    if (response.status !== 200) {
        return { success: false };
    }
    return response.json();
};

export default driveEngine;
