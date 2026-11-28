
type ServiceRequest ={
    readonly id: number,
    title: string,
    category: string,
    priority: number,
    status: 'ACTIVE' | 'SUBMITTED' | 'CLOSED',
    assignee?: string| null
}

const collectionOfRequests: ServiceRequest[] = [];
    //{ id: 1, title: 'Fix login issue', category: 'Technical',priority: 2, status: 'ACTIVE', assignee: null},
   // { id: 2, title: 'Fix logout issue', category: 'Technical',priority: 1, status: 'CLOSED', assignee: null},
   // { id: 3, title: 'Update documentation', category: 'Documentation',priority: 3, status: 'CLOSED', assignee: null},
   // { id: 4, title: 'Add new feature', category: 'Feature',priority: 2, status: 'SUBMITTED', assignee: null},
   // { id: 5, title: 'Fix bug', category: 'Bug',priority: 1, status: 'SUBMITTED', assignee: null},
   // { id: 6, title: 'Improve performance', category: 'Performance',priority: 2, status: 'ACTIVE', assignee: 'John Doe'},
//]
for (let ind=0; ind < 6 ; ind++) {
    const request : ServiceRequest = 
    { id: 1 + ind,
     title: `Fix login issue ${ind + 1}`,
    category: 'Technical',
    priority: ind % 2 == 0 ? 1:2,
    status: ind % 3 === 0 ? 'ACTIVE' : 'CLOSED',
    assignee: null};
    
    collectionOfRequests.push(request);
}


console.log(collectionOfRequests); 

const unassignedRequests : ServiceRequest = { id: 5, title: 'Fix bug', category: 'Bug',priority: 1, status: 'SUBMITTED', assignee: null};

console.log(unassignedRequests);
console.log(assigned(unassignedRequests, 'John Doe'));
console.log(unassignedRequests);

function assigned(request: ServiceRequest, name: string | null ): ServiceRequest {
    const copyOfRequest: ServiceRequest = { ...request, assignee: name };
    return copyOfRequest;
} ;