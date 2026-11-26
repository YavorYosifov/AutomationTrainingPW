// Task B · homework/s05/request-label.ts: build the label REQ-1042 [P2] Broken street light (Lighting)
//  from separate constants, print it, then print its length with .length


const prefix: string = 'REQ';

const separator: string = '-';

const requestIdNumber: number = 1042; 

const priority: string = '[P2]';

const category: string = 'Lighting';

const text: string = 'Broken street light';

const label: string = `${prefix}${separator}${requestIdNumber} ${priority} ${text} (${category})`;

console.log(label);
console.log(label.length);



