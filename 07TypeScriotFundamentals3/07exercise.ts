const isUrgent = (priority: number): boolean => priority <= 2;

const priority = 1;

const isNotUrgent = (priority: number): boolean => priority < 2;

//----------------------------------

function retry (times: number, action: () => boolean): boolean {
  for (let i = 0; i < times; i++) {
    if (action())  return true;
  }return false;   
}

retry (5, () => Math.random() > 0 );

//----------------------------------

const statuses: string[] = ['Submitted', 'In Review', 'Resolved'];
statuses[0];                    // 'Submitted'
statuses[statuses.length - 1];  // 'Resolved'
statuses.at(-1);                // 'Resolved'
statuses[5];                    // undefined
statuses.length;                // 3

//-----------------------------------   

const ids = ['REQ-1', 'REQ-2', 'REQ-3'];
ids.includes('REQ-2');     // true
ids.indexOf('REQ-3');      // 2
ids.indexOf('REQ-9');      // -1    (not found)
ids.join(', ');            // 'REQ-1, REQ-2, REQ-3'

'Roads,Lighting,Parks'.split(',');  // string[]


//--------------------------------------

const original = ['Citizen', 'Clerk'];
const sameArray = original;
sameArray.push('Admin');
console.log(original);   // ['Citizen', 'Clerk', 'Admin'] !
const copy = [...original];
const all = [...original, 'Supervisor'];

//--------------------------------------

function slaHours(priority: number): number {
if (priority === 1) {
return 4;
  }
return priority <= 3 ? 24 : 72;
}
const hours = slaHours(2);   
// 24
//slaHours('2');
// Error: Argument of type 'string' is not assignable
// to parameter of type 'number

//--------------------------------------    

function formatRequest(id: number, title: string,
                       prefix = 'REQ', note?: string): string {
  const base = `${prefix}-${id}: ${title}`;
  return note ? `${base} (${note})` : base;
}
formatRequest(7, 'Pothole');          // 'REQ-7: Pothole'
formatRequest(7, 'Pothole', 'INC');   // 'INC-7: Pothole'

//--------------------------------------
function logStatus(id: string, status: string | undefined): void {
if (!status) {
    console.log(`${id}: no status`);
return;
  }
  console.log(`${id}: ${status}`);
}

//--------------------------------------
const toId = (n: number) => `REQ-${n}`;
const greet = (name: string) => {
const time = new Date().getHours() < 12 ? 'morning' : 'day';
return `Good ${time}, ${name}`;
};
// you already used one:
//test('title', async ({ page }) => { /* ... */ });
//--------------------------------------
const priorities = [3, 1, 5, 2];
priorities.forEach((p) => console.log(`P${p}`));
const firstUrgent = priorities.find((p) => p <= 2);   
// 1
function retry1(times: number, action: () => boolean): boolean {
for (let i = 0; i < times; i++) {
if (action()) return true;
  }
return false;
}