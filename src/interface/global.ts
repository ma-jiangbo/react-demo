interface TodoItem {
    objectId: string;
    content: string;
    createdAt: number;
    updatedAt: number;
}

interface RouteItem {
    path: string;
    name: string;
    children?: RouteItem[]
}