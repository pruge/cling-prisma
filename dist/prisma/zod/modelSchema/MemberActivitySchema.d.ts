import { z } from 'zod';
export declare const MemberActivitySchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
}, {
    id: string;
    userId: string;
}>;
export type MemberActivity = z.infer<typeof MemberActivitySchema>;
export default MemberActivitySchema;
