import { z } from 'zod';
export declare const MemberSchema: z.ZodObject<{
    role: z.ZodEnum<["admin", "member", "guest"]>;
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    tag: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    email: string;
    tag: string;
    role: "member" | "admin" | "guest";
    createdAt: Date;
    updatedAt: Date;
}, {
    name: string;
    id: string;
    email: string;
    tag: string;
    role: "member" | "admin" | "guest";
    createdAt: Date;
    updatedAt: Date;
}>;
export type Member = z.infer<typeof MemberSchema>;
export default MemberSchema;
