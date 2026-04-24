export declare const createPlan: (userId: number, payload: {
    title: string;
    description: string;
    category: string;
    durationDays: number;
    tasks: Array<{
        day: number;
        title: string;
        description: string;
    }>;
}) => Promise<{
    tasks: any[];
    id: number;
    creator_id: number;
    title: string;
    description: string;
    category: string;
    duration_days: number;
    average_rating: number;
    follower_count: number;
    created_at: string;
    updated_at: string;
}>;
export declare const getPlans: (query: {
    search?: string;
    category?: string;
    minRating?: number;
    sortBy?: string;
    maxDuration?: number;
}) => Promise<any[]>;
export declare const getPopularPlans: () => Promise<any[]>;
export declare const getPlanById: (planId: number) => Promise<{
    tasks: any[];
    id: number;
    creator_id: number;
    title: string;
    description: string;
    category: string;
    duration_days: number;
    average_rating: number;
    follower_count: number;
    created_at: string;
    updated_at: string;
}>;
export declare const updatePlan: (userId: number, planId: number, updates: Partial<{
    title: string;
    description: string;
    category: string;
    durationDays: number;
    tasks: Array<{
        day: number;
        title: string;
        description: string;
    }>;
}>) => Promise<{
    tasks: any[];
    id: number;
    creator_id: number;
    title: string;
    description: string;
    category: string;
    duration_days: number;
    average_rating: number;
    follower_count: number;
    created_at: string;
    updated_at: string;
}>;
export declare const deletePlan: (userId: number, planId: number) => Promise<void>;
export declare const followPlan: (userId: number, planId: number) => Promise<{
    success: boolean;
}>;
export declare const unfollowPlan: (userId: number, planId: number) => Promise<{
    success: boolean;
}>;
export declare const getPlanProgress: (userId: number, planId: number) => Promise<{
    planId: number;
    totalTasks: number;
    completedTaskIds: number[];
    completionRate: number;
    tasks: any[];
}>;
export declare const updateProgress: (userId: number, planId: number, completedTaskIds: number[]) => Promise<{
    planId: number;
    completedTaskIds: number[];
    completionRate: number;
}>;
export declare const ratePlan: (userId: number, planId: number, rating: number) => Promise<{
    planId: number;
    rating: number;
    averageRating: number;
}>;
