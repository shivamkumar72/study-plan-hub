export declare const hashPassword: (plainText: string) => Promise<string>;
export declare const comparePassword: (plainText: string, hashedPassword: string) => Promise<boolean>;
