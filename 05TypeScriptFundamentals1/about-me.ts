//Core tasks (about 1 hour, no if/else needed: everyone does these)
//Task A · homework/s05/about-me.ts: declare your first name, last name,
//  team, years in the company and whether you like coffee, then print each 
// on its own line with template literals

const firstName: string = 'Yavor';

const lastName: string = 'Yosifov';

const team: string = 'Quality Assurance (QA)';

let yearsInTheCompany: number = 1;

const LikeCoffe: boolean = false;


console.log (`My name is ${firstName} ${lastName}`);
console.log(`I am part of the ${team} team at the company`);
console.log(`I am working at this company for ${yearsInTheCompany} ${yearsInTheCompany ===1 ? 'year' : 'years'}`);
console.log(`Like Coffee: ${LikeCoffe}`);






