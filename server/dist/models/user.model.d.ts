export interface UserRecord {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: string;
}
export declare const findUserByEmail: (email: string) => Promise<UserRecord | null>;
export declare const findUserById: (userId: number) => Promise<UserRecord | null>;
export declare const createUser: (name: string, email: string, password: string) => Promise<UserRecord>;
export declare const getUserCreatedPlans: (userId: number) => Promise<any[]>;
export declare const getUserFollowedPlans: (userId: number) => Promise<any[]>;
