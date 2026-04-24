import { JwtPayload } from 'jsonwebtoken';
export declare const signAccessToken: (userId: number) => string;
export declare const signRefreshToken: (userId: number) => string;
export declare const verifyAccessToken: (token: string) => JwtPayload;
export declare const verifyRefreshToken: (token: string) => JwtPayload;
