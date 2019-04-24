export interface JwtPayload {
    subjectId: string;
    issuedAt: number;
    expiration: number;
    role: string;
    issuer: string;
    audience: string;
}
