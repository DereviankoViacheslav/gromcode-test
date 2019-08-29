
let dataArray = [
    {
        name: 'John Walker',
        birthDate: '1995-12-17'
    },
    {
        name: 'John Dou',
        birthDate: '1982-10-13'
    },
    {
        name: 'Andrew Dou',
        birthDate: '1985-12-15'
    },
    {
        name: 'Andrew Smith',
        birthDate: '2001-10-29'
    },
];

function searchByName(str) {
    return dataArray.filter((el) => {
        return el.name.toLowerCase().search(str.toLowerCase()) !== -1;
    });
}

function getBiggestAge() {
    let age = Date.parse(dataArray[0].birthDate);
    for (let i of dataArray) {
        age = Date.parse(i.birthDate) < age ? Date.parse(i.birthDate) : age;
    }
    age = (Date.parse(new Date()) - age) / (60 * 60 * 24 * 1000) / 365;
    return Math.trunc(age);
}

console.log('Result Search By Name => ', searchByName('LK'));
console.log('Biggest Age => ', getBiggestAge());
