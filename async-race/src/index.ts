import routePages from './features/routePages';
import setLocalStorage from './features/setLocalStorage';
import getLocalStorage from './features/getLocalStorage';
import act from './features/act';

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', getLocalStorage);

window.addEventListener('hashchange', routePages);

window.addEventListener('click', act);

routePages();
