// Create 3 valid test data objects and 3 invalid ones (missing or wrong fields), with a comment why each is invalid

import type { NewRequest } from "./requestWizardData";

export const validRequest1: NewRequest = {
        contactDetails: {
            preferedContacMethod: "Email",
            title: "Ms",
            mobilePhone: "0896000000",
            email: "hristo@gmail.com",
            contactPerson: "Hristo Hristov",
        },
        location: {
            country: "Bulgaria",
            city: "Sofia",
            address: "1 Vitosha Boulevard",
            postalCode: 1000,
            building: "A",
        },
        requestDetails: {
            id: 1,
            title: "Online banking access",
            description: "Unable to sign in to online banking.",
            priority: 2,
            category: "Online Banking",
            dateOfRequest: new Date("2026-11-27"),
            isEmergent: false,
        },
        attachment: {
            fileName: "sign-in-error.png",
            fileSizeKB: 180,
            fileType: "image/png",
        },
};

export const validRequest2: NewRequest = {
        contactDetails: {
            preferedContacMethod: "SMS",
            title: "Mr",
            mobilePhone: "0896555102",
            email: "ivo@abv.bg",
            phone: "555-0199",
            contactPerson: "Ivo Ivanov",
        },
        location: {
            country: "Romania",
            city: "Timișoara",
            address: "1 Piața Victoriei",
            postalCode: 300006,
            building: "Central",
            floor: "3",
        },
        requestDetails: {
            id: 2,
            title: "Replace lost bank card",
            description: "I lost my bank card and need a replacement.",
            priority: 1,
            category: "Lost Bank Card",
            dateOfRequest: new Date("2026-11-27"),
            referenceNumber: "CARD-2048",
            isEmergent: true,
        },
        attachment: {
            fileName: "loss-report.pdf",
            fileSizeKB: 250,
            fileType: "application/pdf",
        },
};

export const validRequest3: NewRequest = {
        contactDetails: {
            preferedContacMethod: "Phone",
            title: "Dr",
            mobilePhone: "0896555105",
            email: "jordan@example.com",
            contactPerson: "Jordan Nikolov",
        },
        location: {
            country: "Serbia",
            city: "Belgrade",
            address: "12 Knez Mihailova",
            postalCode: 11000,
            building: "12",
            room: "2",
        },
        requestDetails: {
            id: 3,
            title: "Transfer status",
            description: "Please check the status of my recent bank transfer.",
            priority: 3,
            category: "Bank Transfers",
            dateOfRequest: new Date("2026-11-27"),
            referenceNumber: "TRX-12345",
            isEmergent: false,
        },
        attachment: {
            fileName: "transfer-receipt.pdf",
            fileSizeKB: 320,
            fileType: "application/pdf",
        },
};



export const invalidRequest1 = {
            // Invalid: contactPerson is required by contactDetails.
         // @ts-expect-error Intentionally missing the required contactPerson field.
        contactDetails: {
            preferedContacMethod: "Email",
            title: "Ms",
            mobilePhone: "0897546567",
            email: "casey@example.com",
        },
        location: {
            country: "Bulgaria",
            city: "Sofia",
            address: "5 Graf Ignatiev Street",
            postalCode: 1000,
            building: "B",
        },
        requestDetails: {
            id: 4,
            title: "Branch inquiry",
            description: "Question about branch opening hours.",
            priority: 2,
            category: "Bank Branches",
            dateOfRequest: new Date("2026-11-27"),
            isEmergent: false,
        },
        attachment: {
            fileName: "branch-hours.png",
            fileSizeKB: 140,
            fileType: "image/png",
        },
} satisfies NewRequest;

export const invalidRequest2 = {
        contactDetails: {
            preferedContacMethod: "Email",
            title: "Mr",
            mobilePhone: "0897546567",
            email: "Dimitar@mail.com",
            contactPerson: "Dimitar Toshev",
        },
        location: {
            country: "Romania",
            city: "Timișoara",
            address: "2 Alba Iulia Street",
            postalCode: 300006,
            building: "Central",
        },
        requestDetails: {
            id: 5,
            title: "Technical support",
            description: "The mobile app displays an error.",
            // Invalid: priority must be a number from 1 to 5.
            // @ts-expect-error Intentionally outside the allowed priority range.
            priority: 6,
            category: "Technical Support",
            dateOfRequest: new Date("2026-11-27"),
            isEmergent: false,
        },
        attachment: {
            fileName: "app-error.png",
            fileSizeKB: 210,
            fileType: "image/png",
        },
} satisfies NewRequest;

export const invalidRequest3 = {
        contactDetails: {
            preferedContacMethod: "SMS",
            title: "Ms",
            mobilePhone: "0897546567",
            email: "Geri@example.com",
            contactPerson: "Gergana Dimitrova",
        },
        location: {
            country: "Serbia",
            city: "Belgrade",
            address: "15 Knez Mihailova",
            // Invalid: postalCode is declared as a number, not a string.
            // @ts-expect-error Intentionally using the wrong type for postalCode.
            postalCode: "11000",
            building: "15",
        },
        requestDetails: {
            id: 6,
            title: "Stolen bank card",
            description: "My bank card was stolen.",
            priority: 1,
            category: "Stolen bank card",
            dateOfRequest: new Date("2026-11-27"),
            isEmergent: true,
        },
        attachment: {
            fileName: "stolen-card-report.pdf",
            fileSizeKB: 275,
            fileType: "application/pdf",
        },
} satisfies NewRequest;

export const requests = [
    validRequest1,
    validRequest2,
    validRequest3,
    invalidRequest1,
    invalidRequest2,
    invalidRequest3,
];