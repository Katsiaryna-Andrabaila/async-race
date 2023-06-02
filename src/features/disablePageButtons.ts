const disablePageButtons = () => {
    const nextPageBtn = <HTMLButtonElement>document.querySelector('.next-page-button');
    const prevPageBtn = <HTMLButtonElement>document.querySelector('.prev-page-button');
    nextPageBtn.setAttribute('disabled', 'disabled');
    nextPageBtn.classList.add('inactive');
    prevPageBtn.setAttribute('disabled', 'disabled');
    prevPageBtn.classList.add('inactive');
};

export default disablePageButtons;
