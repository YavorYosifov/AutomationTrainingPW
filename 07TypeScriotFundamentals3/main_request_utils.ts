//This mputsection can give the ability to the user to use console readline to enter an imput mannually.|
//If used, the hardcoded input should commented/ and this section should be uncomented.
//Some changes still need to be done to use the console.



// import * as readline from "node:readline/promises"

// async function main () : Promise <void> {

// const input = readline.createInterface({
// input: process.stdin,
// output:process.stdout,
// });

// const id: number = Number (await input.question("Enter the Id"));

// const title: string = await input.question("Enter the Title");

// const category: string = await input.question ("Enter the Category");

// const summary: string = await input.question ("Enter the Summary");

// const dateText : string = await input.question ("Enter the request date in format:YYYY-MM-DD");

// const date: Date = new Date(`${dateText}T00:00:00`);

// input.close();
// }

// main();

import {
    idFormating,
    checkCategory,
    titleValidator,
    slaHours,
    isOverdue,
    generateSummary,
} from "./request_utils";

interface RequestRecord {
    id: number;
    title: string;
    category: string;
    summary: string;
    requestDate: Date;
    priority: number;
}

const requests: RequestRecord[] = [
    { id: 1, title: "Cannot access account", category: "Online Banking", summary: "Customer cannot sign in.", requestDate: new Date("2026-11-25T08:00:00"), priority: 1 },
    { id: 2, title: "Card payment declined", category: "Bank Cards", summary: "Card transactions are declined.", requestDate: new Date("2026-11-24T10:00:00"), priority: 2 },
    { id: 3, title: "Payment transfer error", category: "Payment issues", summary: "A bank transfer failed.", requestDate: new Date("2026-11-25T12:00:00"), priority: 3 },
    { id: 12, title: "Technical support needed", category: "Technical Support", summary: "The mobile application crashes.", requestDate: new Date("2026-11-20T09:00:00"), priority: 4 },
    { id: 23, title: "Customer profile update", category: "Customer Support", summary: "Customer needs help changing contact details.", requestDate: new Date("2026-11-22T14:00:00"), priority: 5 },
    { id: 34, title: "Online statement missing", category: "Online Banking", summary: "A recent statement is not displayed.", requestDate: new Date("2026-11-26T06:00:00"), priority: 2 },
    { id: 45, title: "New card activation", category: "Bank Cards", summary: "The replacement card cannot be activated.", requestDate: new Date("2026-11-25T18:00:00"), priority: 3 },
    { id: 56, title: "Transfer status inquiry", category: "Payment issues", summary: "Customer is waiting for transfer confirmation.", requestDate: new Date("2026-11-26T10:00:00"), priority: 1 },
];

const currentDate = new Date("2026-11-26T12:00:00");

console.log("Request report");
console.log("==============");

for (const request of requests) {
    try {
        const formattedId = idFormating(request.id);
        const validTitle = titleValidator(request.title);
        checkCategory(request.category);

        const allowedHours = slaHours(request.priority);
        const overdueStatus = isOverdue(request.requestDate, request.priority, currentDate);
        const summaryRows = generateSummary(
            request.id,
            validTitle,
            request.category,
            request.summary,
            request.requestDate
        );

        console.log(`\n${formattedId}`);

        for (const row of summaryRows) {
            console.log(row);
        }

        console.log(`Priority: ${request.priority}`);
        console.log(`SLA: ${allowedHours} hours`);
        console.log(`Status: ${overdueStatus}`);
    } catch (error) {
        console.log(`\nRequest ID ${request.id}: ${(error as Error).message}`);
    }
}
