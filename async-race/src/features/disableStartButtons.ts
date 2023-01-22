const disableStartButtons = () => {
    const startButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.engine-button');
    startButtons.forEach((el) => {
        el.classList.add('inactive');
        el.setAttribute('disabled', 'disabled');
    });
    const stopButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.stop-button');
    stopButtons.forEach((el) => {
        el.classList.remove('inactive');
        el.removeAttribute('disabled');
    });
};

export default disableStartButtons;
