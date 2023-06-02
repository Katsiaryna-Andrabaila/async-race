const disableStopButtons = () => {
    const startButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.engine-button');
    startButtons.forEach((el) => {
        el.classList.remove('inactive');
        el.removeAttribute('disabled');
    });
    const stopButtons = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.stop-button');
    stopButtons.forEach((el) => {
        el.classList.add('inactive');
        el.setAttribute('disabled', 'disabled');
    });
};

export default disableStopButtons;
