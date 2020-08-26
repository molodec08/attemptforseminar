//FOR TEST? MAYBE DELETE LATER
const casesTable = document.querySelector('.cases');
const main = document.querySelector('.main');
//UP

const renderTable = (options, data) => {
    let result = `
<tr>
    <th width="${options.uidWidth}">${options.uidName}</th>
    <th width="${options.caseTypeWidth}">${options.caseTypeName}</th>
    <th width="${options.openDateWidth}">${options.openDateName}</th>
    <th width="${options.closeDateWidth}">${options.closeDateName}</th>
    <th width="${options.patientFioWidth}">${options.patientFioName}</th>
    <th width="${options.patientBdWidth}">${options.patientBdName}</th>
    <th>${options.commentName}</th>
</tr>
`;
    data.forEach(element => {
        result += `
<tr>
    <td align="center">${element.uid}</td>
    <td align="center">${element.caseType}</td>
    <td align="center">${element.openDate}</td>
    <td align="center">${element.closeDate}</td>
    <td align="center">${element.patientFio}</td>
    <td align="center">${element.patientBd}</td>
    <td align="center">${element.comment}</td>
</tr>
`});
    return result;
}

const createFilters = () => {
    return `
<div class="filters">
    <div class="filter-tabs">
    <label for="casetype">Тип случая:</label>
    <select class="filter case-type" name="casetype" id="casetype">
        <option label=" " value=""></option>
        <option value="1">Поликлинический</option>
        <option value="2">Госпитализации</option>
    </select>

    <label for="opendate">Дата открытия:</label>
    <input class="filter open-date" type="date" name="opendate" id="opendate">

    <button class="button do-filter">Применить фильтры</button>
    <button class="button cancel-filter">Сбросить фильтры</button>
    </div>
</div>
`;
}

const pageLoad = () => {
    main.insertAdjacentHTML('afterbegin', createFilters());
}

// FOR TEST, DELETE LATER!
pageLoad();
const doFilter = document.querySelector('.do-filter');
const cancelFilter = document.querySelector('.cancel-filter');
const caseTypeFilter = document.querySelector('.case-type');
const openDateFilter = document.querySelector('.open-date');

let options = {
    uidWidth: "10%",
    uidName: "Номер случая",
    caseTypeWidth: "15%",
    caseTypeName: "Вид случая",
    openDateWidth: "10%",
    openDateName: "Дата открытия",
    closeDateWidth: "10%",
    closeDateName: "Дата закрытия",
    patientFioWidth: "20%",
    patientFioName: "ФИО пациента",
    patientBdWidth: "10%",
    patientBdName: "Дата рождения",
    commentName: "Комментарий"
};

let data = [
    {uid: "1", caseType: "Поликлинический", openDate: "01.05.2020", closeDate: "20.05.2020", patientFio: "Васин Вася Васянович", patientBd: "01.01.1990", comment: "блаблаблаблабла"},
    {uid: "2", caseType: "Госпитализации", openDate: "01.01.2020", closeDate: "открыт", patientFio: "Иванов Иван Иванович", patientBd: "21.07.1989", comment: ""},
    {uid: "3", caseType: "Поликлинический", openDate: "03.03.2020", closeDate: "20.05.2020", patientFio: "Петров Петр Петрович", patientBd: "11.03.1965", comment: ""},
    {uid: "4", caseType: "Госпитализации", openDate: "25.05.2020", closeDate: "20.05.2020", patientFio: "Фроскин Фроска Молодецович", patientBd: "23.07.1992", comment: "ваще крутой дядька он"},
    {uid: "5", caseType: "Скорой помощи", openDate: "06.05.2020", closeDate: "открыт", patientFio: "Габеллян Арменка", patientBd: "14.03.1995", comment: ""}
];

let table = renderTable(options,data);
casesTable.insertAdjacentHTML('afterbegin',table);

doFilter.addEventListener('click', e => console.log(caseTypeFilter.value, openDateFilter.value));

cancelFilter.addEventListener('click', e => {
    caseTypeFilter.value = "";
    openDateFilter.value = "";
})
//UP