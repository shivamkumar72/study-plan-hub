export declare const getUserProfile: (userId: number) => Promise<{
    id: number;
    name: string;
    email: string;
    createdAt: string;
    createdPlans: any[];
    followedPlans: any[];
}>;
