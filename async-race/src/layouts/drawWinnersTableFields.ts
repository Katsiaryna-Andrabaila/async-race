import UI from '../data/UI';

const drawWinnersTableFields = (parent: HTMLDivElement) => {
    const tableFields = document.createElement('div');
    tableFields.classList.add('table-fields');

    const numberField = document.createElement('span');
    numberField.classList.add('table-field', 'name-field');
    numberField.textContent = UI.numberField;

    const carField = document.createElement('span');
    carField.classList.add('table-field', 'car-field');
    carField.textContent = UI.carField;

    const nameField = document.createElement('span');
    nameField.classList.add('table-field', 'name-field');
    nameField.textContent = UI.nameField;

    const winsField = document.createElement('span');
    winsField.classList.add('table-field', 'wins-field');
    winsField.textContent = UI.winsField;

    const timeField = document.createElement('span');
    timeField.classList.add('table-field', 'time-field');
    timeField.textContent = UI.timeField;

    tableFields.append(numberField, carField, nameField, winsField, timeField);
    parent.append(tableFields);
};

export default drawWinnersTableFields;
