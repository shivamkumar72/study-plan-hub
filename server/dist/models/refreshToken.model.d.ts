export declare const saveRefreshToken: (userId: number, token: string) => Promise<void>;
export declare const findRefreshToken: (token: string) => Promise<any>;
export declare const revokeRefreshToken: (token: string) => Promise<void>;
