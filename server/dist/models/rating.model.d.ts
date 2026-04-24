export declare const getRatingByUserAndPlan: (userId: number, planId: number) => Promise<any>;
export declare const upsertRating: (userId: number, planId: number, rating: number) => Promise<any>;
export declare const calculateAverageRating: (planId: number) => Promise<number>;
