// Task E · homework/s05/request-summary.ts: print a request summary, calculate its SLA due time,
//  and validate its email address with and without a regular expression
//Use some AI here
type Priority = 'P1' | 'P2' | 'P3';

interface SupportRequest {
  id: string;
  title: string;
  category: string;
  priority: Priority;
  requester: string;
  email: string;
  createdHour: number;
  status: string;
}

const request: SupportRequest = {
  id: 'REQ-1042',
  title: 'Broken street light',
  category: 'Lighting',
  priority: 'P2',
  requester: 'Yavor Yosifov',
  email: 'yavor.yosifov@example.com',
  createdHour: 9,
  status: 'Open'
};

const slaHoursByPriority: Record<Priority, number> = {
  P1: 4,
  P2: 24,
  P3: 72
};

const slaHours: number = slaHoursByPriority[request.priority];
const totalDueHour: number = request.createdHour + slaHours;
const dueHour: number = totalDueHour % 24;
const daysUntilDue: number = Math.floor(totalDueHour / 24);
const dueDayLabel: string = daysUntilDue === 1 ? 'day' : 'days';

console.log(`
+-------------------- REQUEST SUMMARY --------------------+
| ID: ${request.id}
| Title: ${request.title}
| Category: ${request.category}
| Priority: ${request.priority}
| Requester: ${request.requester}
| Email: ${request.email}
| Status: ${request.status}
| Created hour: ${request.createdHour}:00
| SLA: ${slaHours} hours
| Due: ${dueHour}:00 (${daysUntilDue} ${dueDayLabel} after creation)
+----------------------------------------------------------+
`);

const atSignIndex: number = request.email.indexOf('@');
const hasExactlyOneAtSign: boolean =
  atSignIndex !== -1 && atSignIndex === request.email.lastIndexOf('@');
const textBeforeAt: string = request.email.slice(0, atSignIndex);
const textAfterAt: string = request.email.slice(atSignIndex + 1);
const hasTextBeforeAndAfterAt: boolean =
  textBeforeAt.length > 0 && textAfterAt.length > 0;
const hasDomain: boolean =
  textAfterAt.includes('.') &&
  textAfterAt.indexOf('.') > 0 &&
  textAfterAt.lastIndexOf('.') < textAfterAt.length - 1;
const validEmailWithoutRegex: boolean =
  hasExactlyOneAtSign && hasTextBeforeAndAfterAt && hasDomain;

const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validEmailWithRegex: boolean = emailPattern.test(request.email);

console.log(`Email valid without regex: ${validEmailWithoutRegex}`);
console.log(`Email valid with regex: ${validEmailWithRegex}`);
console.log('Comparison: The manual check shows each validation step; the regex is shorter but less explicit.');
