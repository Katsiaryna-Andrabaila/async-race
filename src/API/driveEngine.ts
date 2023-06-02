import { Path } from '../data/types';
import { BASE_URL, SUCCESS_DRIVE_CODE } from '../data/constants';

const driveEngine = async (id: number) => {
    const response = await fetch(`${BASE_URL}${Path.engine}?id=${id}&status=drive`, {
        method: 'PATCH',
    }).catch();
    if (response.status !== SUCCESS_DRIVE_CODE) {
        return { success: false };
    }
    return response.json();
};

export default driveEngine;
