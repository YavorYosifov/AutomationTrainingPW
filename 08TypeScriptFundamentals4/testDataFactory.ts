//Write a TestDataFactory class with a method validRequest(overrides?) that returns a fresh object each
//  time, using spread for the overrides
import type { NewRequest} from "./requestWizardData";
import { requests } from "./testData";

export class TestDataFactory {
    private static titleCounter = 0;

    validRequest(overrides: Partial<NewRequest> = {}): unknown[] {
        return requests.map(request =>
            ({ ...structuredClone(request), ...overrides })
        );
    }

    uniqueTitle(): string {  //with AI found that if use this. it will start from 0 in each usage. 

        TestDataFactory.titleCounter++;
        return `Test request ${TestDataFactory.titleCounter}`;
    }
}
