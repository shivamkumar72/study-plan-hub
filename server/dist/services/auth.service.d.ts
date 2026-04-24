export declare const registerUser: (input: {
    name: string;
    email: string;
    password: string;
}) => Promise<{
    id: number;
    name: string;
    email: string;
    createdAt: string;
}>;
export declare const loginUser: (input: {
    email: string;
    password: string;
}) => Promise<{
    user: {
        id: number;
        name: string;
        email: string;
    };
    accessToken: string;
    refreshToken: string;
}>;
export declare const refreshUserToken: (token: string) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare const logoutUser: (token: string) => Promise<void>;
export declare const getUserProfile: (userId: number) => Promise<{
    id: number;
    name: string;
    email: string;
    createdAt: string;
    createdPlans: any[];
    followedPlans: any[];
}>;
