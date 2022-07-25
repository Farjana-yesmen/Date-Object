// only date
let date = new Date();
console.log(date.getDate());

// internationnal time
let date2 =new Date();
console.log(`
${date2.getHours()} : ${date2.getMinutes()} : ${date2.getSeconds()}
`);

// Bangladesh time
let date3 =new Date();
let hour =0;
let ampm=0;
if (date3.getHours()>12){
    ampm='Am';
    hour=date3.getHours()-12;
}
else{
    ampm='Am';
    hour=date3.getHours();
}
console.log(`
${hour===0?12:hour} : ${date3.getMinutes()} : ${date3.getSeconds()} ${ampm}-${date.getMilliseconds()}
`);

// Another way of date
const month=['jan','feb','March','April','May','jun','july','Agust','sep','octo','Dec'];
let date4 = new Date();
console.log(`${month[date4.getMonth()]} ${date4.getDate()}.${date4.getFullYear()}`);

// time 
let date5= new Date();
console.log(`${date5.getTime()}`);
