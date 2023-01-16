import UI from '../data/UI';
import setHash from '../features/setHash';

const drawHeader = () => {
    if (document.querySelector('header')) {
        return;
    }

    const header = document.createElement('header');
    header.classList.add('header');

    document.body.append(header);

    const garageBtn = document.createElement('button');
    garageBtn.classList.add('garage-button', 'button');
    garageBtn.textContent = UI.headerButton1;
    garageBtn.addEventListener('click', () => setHash('/'));

    const winnersBtn = document.createElement('button');
    winnersBtn.classList.add('winners-button', 'button');
    winnersBtn.textContent = UI.headerButton2;
    winnersBtn.addEventListener('click', () => setHash('/winners'));

    header.append(garageBtn, winnersBtn);
};

export default drawHeader;
