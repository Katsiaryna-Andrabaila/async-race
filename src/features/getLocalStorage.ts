import state from '../data/state';

const getLocalStorage = async () => {
    const stateJson = localStorage.getItem('state-andrabaila_e');
    if (stateJson) {
        const updatedState = JSON.parse(stateJson);
        Object.assign(state, updatedState);
    }
};

export default getLocalStorage;
