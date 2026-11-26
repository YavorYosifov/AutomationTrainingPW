//Task C · homework/s05/clean-title.ts: start from '   broken STREET light   ' and print it trimmed, in lower case,
//in upper case, capitalized (Broken street light), whether it mentions "light", and with "street" replaced by
//  "road"
const label: string = `REQ-1042 [P2] Broken street light (Lighting)`;
const slicedLabel: string = label.slice(14,34);
console.log("Sliced label:", slicedLabel);

const title: string =  '   broken STREET light   ';
console.log("Original title length:", title.length);

const trimmedTitle: string = title.trim();
console.log("Trimmed title:", trimmedTitle);

const titleToLowerCase : string = title.toLowerCase();

console.log("Title in lowercase:", titleToLowerCase);

const titleToUpperCase : string = title.toUpperCase();

console.log("Title in uppercase:", titleToUpperCase);

const capitalizedTitle =
  title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();

console.log("Capitalized title:", capitalizedTitle);

const replaced : string = title.toLowerCase().replace("street", "road" );

console.log("Replacement result:", replaced);

const containsAWord : boolean = title.includes("light");

console.log("Does the title contain 'light'?:", containsAWord);



