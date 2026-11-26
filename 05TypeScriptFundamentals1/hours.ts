//Task D · homework/s05/hours.ts: convert 30 SLA hours into full days and remaining hours
//  (use Math.floor and %) and into minutes. Then start a let counter at 5 open requests, add 3 new ones,
//  resolve 2 and print the result

const slaHours : number = 30;

const fullDays : number = Math.floor(slaHours / 24);

const remainingHours : number = slaHours % 24;

const remainingMinutes : number = remainingHours * 60; 


let counterOpenRequests: number = 5; 
counterOpenRequests += 3; 
counterOpenRequests -=2;

console.log(`Full days: ${fullDays}`);
console.log(`Remaining hours: ${remainingHours}`);
console.log(`Remaining minutes: ${remainingMinutes}`);
console.log(`Counter of the open requests: ${counterOpenRequests}`);
