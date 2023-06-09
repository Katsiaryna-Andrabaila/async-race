import routePages from './features/routePages';
import setLocalStorage from './features/setLocalStorage';
import getLocalStorage from './features/getLocalStorage';
import actGarage from './features/actGarage';
import actWinners from './features/actWinners';

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('hashchange', routePages);

getLocalStorage().then(() => routePages());

window.addEventListener('click', actGarage);

window.addEventListener('click', actWinners);
