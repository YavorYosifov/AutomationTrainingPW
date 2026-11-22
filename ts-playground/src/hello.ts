const name = 'Maria';
const sessions = 36;

console.log('Hello, ' + name);
console.log(`Welcome ${name}, the programme has ${sessions} sessions`);
console.table([{ id: 1, status: 'Submitted' }]);


//id, title, category, priority (1-5), 

const id: number = 2342;
let title: string = 'My request';
let category: 'Water system' | 'Traffic' | 'Streets' = 'Water system';
let priority: 1 | 2 | 3 | 4 | 5 = 4;
let assignee: string = 'Yavor';
let isUrgent: boolean = true;

console.log(`Request ${id} with title ${title} is in category ${category} with priority ${priority}. Assigned to ${assignee}. Urgent: ${isUrgent}`);    