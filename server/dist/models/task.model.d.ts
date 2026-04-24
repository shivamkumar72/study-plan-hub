export interface TaskRecord {
    id: number;
    plan_id: number;
    day_number: number;
    title: string;
    description: string;
}
export declare const insertPlanTasks: (planId: number, tasks: Array<{
    day: number;
    title: string;
    description: string;
}>) => Promise<any[]>;
export declare const getPlanTasks: (planId: number) => Promise<any[]>;
export declare const deletePlanTasks: (planId: number) => Promise<void>;
export declare const countPlanTasks: (planId: number) => Promise<number>;
