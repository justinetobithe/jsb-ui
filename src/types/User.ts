export default interface User {
    id: string;
    name: string;
    email: string;
    contact_number: string;
    image: string | null;
    role: string;
}

export interface UserPaginatedData {
    user: User[];
    last_page: number;
}

export interface UserStateDefinition {
    user: User | null;
}

export interface UserStateActions {
    setUser: (user: User | null) => void;
}