//Model the New Request wizard data as types: ContactDetails, Location, RequestDetails, Attachment, and one NewRequest that combines them
export type contactDetails = {
    preferedContacMethod : 'Email' | 'Mobilephone' | 'Phone'| 'SMS';
    title: string;
    mobilePhone: string;
    email: string;
    phone?:string;
    contactPerson : string;
}

export type Location = {
    country: string;
    city: string;
    address: string;
    postalCode: number;  //here string should be safer decision, but just to have some numbers.
    building: string;
    floor?: string;
    room?: string;
}

 export type RequestDetails = {
    readonly id: number;
    title: string;
    description: string;
    priority: 1 | 2 | 3 | 4| 5
    category: 'Technical Support' | 'Online Banking' | 'Stolen bank card' | 'Lost Bank Card' | 'Bank Transfers' | 'Bank Branches';
    dateOfRequest: Date;
    referenceNumber?: string;
    isEmergent: boolean;
}

 export type Attachment = {
     fileName: string;
     fileSizeKB: number;
     fileType: string;
     file?: File;  //it should not be optionl, but fo the cuurent implementation
}

export type NewRequest  = {
    contactDetails: contactDetails;
    location: Location;
    requestDetails: RequestDetails;
    attachment: Attachment;
}