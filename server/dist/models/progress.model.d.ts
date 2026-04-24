export declare const getCompletedTaskIds: (userId: number, planId: number) => Promise<number[]>;
export declare const deleteProgressForPlan: (userId: number, planId: number) => Promise<void>;
export declare const insertProgress: (userId: number, planId: number, taskIds: number[]) => Promise<void>;
export declare const countCompletedTasks: (userId: number, planId: number) => Promise<number>;
