import UI from '../data/UI';

const drawFooter = () => {
    if (document.querySelector('footer')) {
        return;
    }

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const githubLink = document.createElement('a');
    githubLink.classList.add('github-link');
    githubLink.href = 'https://github.com/Katsiaryna-Andrabaila';
    githubLink.target = '_blank';
    githubLink.textContent = UI.githubLinkText;

    const footerDate = document.createElement('span');
    footerDate.classList.add('footer-year');
    footerDate.textContent = UI.footerYear;

    const rsSchoolLink = document.createElement('a');
    rsSchoolLink.classList.add('rs-link');
    rsSchoolLink.href = 'https://rs.school/js/';
    rsSchoolLink.target = '_blank';

    footer.append(githubLink, footerDate, rsSchoolLink);

    document.body.append(footer);
};

export default drawFooter;
