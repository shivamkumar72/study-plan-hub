export interface PlanRecord {
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
}
export declare const createStudyPlan: (creatorId: number, title: string, description: string, category: string, durationDays: number) => Promise<PlanRecord>;
export declare const updateStudyPlan: (planId: number, updates: Partial<{
    title: string;
    description: string;
    category: string;
    durationDays: number;
}>) => Promise<PlanRecord | null>;
export declare const deleteStudyPlan: (planId: number) => Promise<void>;
export declare const findPlanById: (planId: number) => Promise<PlanRecord | null>;
export declare const findPlanOwner: (planId: number) => Promise<number | null>;
export declare const listStudyPlans: (filters: {
    search?: string;
    category?: string;
    minRating?: number;
    maxDuration?: number;
    sortBy?: "popular" | "rating" | "duration";
}) => Promise<any[]>;
export declare const getPopularStudyPlans: () => Promise<any[]>;
export declare const updateFollowerCount: (planId: number, delta: number) => Promise<void>;
export declare const updateAverageRating: (planId: number, averageRating: number) => Promise<void>;
