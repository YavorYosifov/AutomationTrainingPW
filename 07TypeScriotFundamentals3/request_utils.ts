// 1. Create request-utils.ts with at least 6 small, pure, typed functions: id formatting, SLA calculation, overdue check, title validation (5–100 characters), category check against an allowed list, summary text

 let isValidRequest: boolean = true;

//
export function idFormating(id: number): string {
    
    if (!id) {
        isValidRequest = false;
        throw new Error("No Id provided");
    }

    if (typeof id !== "number" || Number.isNaN(id)) {
        isValidRequest = false;
        throw new Error("Invalid id. A valid integer should be provided as Id");
    }

    if (!Number.isInteger(id) || id <=0) {
        isValidRequest = false;
        throw new Error("Id must be a positive integer");
    }

   const paddedId = id.toString().padStart(4,'0')

    return `REQ-${paddedId}`;
}

//

export const allowedCategories = ["Technical Support", "Customer Support", "Online Banking", "Bank Cards", "Payment issues"]
    
export function checkCategory (category: string) : boolean{

    if (!category) {
        isValidRequest = false;
        throw new Error("No category provided");
    }

     if (typeof category !== "string"){

        isValidRequest = false;
        throw new Error ("The category should be a valid string");
    }

    if (!allowedCategories.includes(category)) {

        isValidRequest = false;
        throw new Error("Invalid category. The category should be one of the following: Technical Support, Customer Support, Online Banking, Bank Cards, Payment issues");
    }
    else{
        
        return true;
    }
}

 export function titleValidator (title : string) : string{
  
    if (!title ) {

        isValidRequest = false;
        throw new Error("No Title provid ed");
    }

    if (typeof title !== "string" || title.trim().length === 0){
        
        isValidRequest = false;
        throw new Error ("The title should be a valid string with lenght at least 1 symbol");
    }

    if (title.length < 5 || title.length> 100) {

        isValidRequest = false;
        throw new Error ("The Title should be between 5 and 100 characters");
    }
    
    return title; 
 }

 export function slaHours (priority: number) : number {
    if (!priority) {
        isValidRequest = false;
         throw new Error("No Priority provided.");
    } 
    
    if (typeof priority !== "number" || Number.isNaN(priority)) {
        isValidRequest = false;
        throw new Error("Invalid Priority. A valid integer should be provided as a Priority.");
    }
    
    if (!Number.isInteger(priority) || priority < 1 || priority > 5.) {
        isValidRequest = false;
        throw new Error("Priority must be a positive integer between 1 and 5");
    }

    if (priority === 1) {
        return 4; 
    }else if (priority <= 3) {
        return 24;
    }else if (priority <= 5) {
        return 72;
    }else { 
        isValidRequest = false;
        throw new Error ("Invalid Priority. The value should be between 1 and 5")
    }
 }
// Used some AI to genarate that function:
export function isOverdue(requestDate: Date, priority: number, currentDate: Date = new Date()): string {
    if (Number.isNaN(requestDate.getTime()) || Number.isNaN(currentDate.getTime())) {
        throw new Error("Invalid date");
    }
    let message: string = "";

    const allowedHours = slaHours(priority);
    const elapsedMilliseconds = currentDate.getTime() - requestDate.getTime();
    const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);

    if (elapsedHours > allowedHours) {
       message = "The request is overdued"
    }else {
       message = "Request In in SLA hours"
    }

    return message;
   
}

export function generateSummary(
    id: number,
    title: string,
    category: string,
    summary: string,
    date: Date
): string[] {
    if (!isValidRequest) {
       throw new Error("Invalid request");
    }

    if (typeof id !== "number" || Number.isNaN(id) || !Number.isInteger(id) || id <= 0) {
        throw new Error("Invalid id");
    }

    if (typeof title !== "string" || title.trim().length === 0) {
        throw new Error("Invalid title");
    }

    if (typeof category !== "string" || !allowedCategories.includes(category)) {
        throw new Error("Invalid category");
    }

    if (typeof summary !== "string" || summary.trim().length === 0) {
        throw new Error("Invalid summary");
    }

    if (Number.isNaN(date.getTime())) {
        throw new Error("Invalid date");
    }

    const paddedId = id.toString().padStart(4, "0");

    return [
        `ID: REQ-${paddedId}`,
        `Title: ${title}`,
        `Category: ${category}`,
        `Summary: ${summary}`,
        `Date: ${date.toISOString().split("T")[0]}`,
    ];
}
