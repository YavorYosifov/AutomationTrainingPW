import { requests } from "./testData";
import { TestDataFactory } from "./testDataFactory";

const testDataFactory = new TestDataFactory();

for (const currentRequest of requests) {
    const newTitle = testDataFactory.uniqueTitle();
    currentRequest.requestDetails.title = newTitle;
    console.log(currentRequest);
}

for (const factoryRequest of testDataFactory.validRequest()) {
    console.log("Factory request:", factoryRequest);
}
