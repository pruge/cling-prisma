import { z } from 'zod';
export declare const RoleSchema: z.ZodEnum<["admin", "member", "guest"]>;
export type RoleType = `${z.infer<typeof RoleSchema>}`;
export default RoleSchema;
