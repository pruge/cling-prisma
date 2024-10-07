import { z } from 'zod';

export const RoleSchema = z.enum(['admin','member','guest']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
