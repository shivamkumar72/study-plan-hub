export declare const isFollowingPlan: (userId: number, planId: number) => Promise<boolean>;
export declare const addFollower: (userId: number, planId: number) => Promise<void>;
export declare const removeFollower: (userId: number, planId: number) => Promise<void>;
export declare const getFollowerCount: (planId: number) => Promise<number>;
