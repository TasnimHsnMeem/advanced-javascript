const students = [
    {id: 21, name: 'Umar'},
    {id: 22, name: 'Habib'},
    {id: 23, name: 'Tilottoma'},
    {id: 24, name: 'Nobab'}
    
];

// const sName = [];

// for( let i=0; i < students.length; i++){
//     const object = students[i];
//     const names = object.name;
//     sName.push(names);
// }
// console.log(sName);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 21);
console.log(bigger);
console.log(ids);