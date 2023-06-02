import state from '../data/state';

const setLocalStorage = () => {
    const stateJson = JSON.stringify(state);
    localStorage.setItem('state-andrabaila_e', stateJson);
};

export default setLocalStorage;
