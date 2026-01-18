const ahora = new Date();
console.log(ahora);
// Date Sat Jan 17 2026 17:44:56 GMT-0400 (Atlantic Standard Time)
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha);
// Date Thu Dec 11 1986 13:15:00 GMT-0400 (Atlantic Standard Time)

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
console.log(fecha2);
// Date Thu Dec 25 1986 14:15:00 GMT-0400 (Atlantic Standard Time)
console.log(fecha3);
// Date Fri Dec 26 1986 05:15:00 GMT-0400 (Atlantic Standard Time)

console.log('datestring', fecha3.toDateString());
// datestring Fri Dec 26 1986

console.log('datestring', fecha3.toISOString());
// datestring 1986-12-26T09:15:00.000Z

console.log('datestring', fecha3.toTimeString());
// datestring 05:15:00 GMT-0400 (Atlantic Standard Time)

fecha3.get
fecha3.set