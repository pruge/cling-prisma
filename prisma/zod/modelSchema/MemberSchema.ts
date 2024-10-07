import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// MEMBER SCHEMA
/////////////////////////////////////////

export const MemberSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  name: z.string(),
  email: z.string(),
  tag: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Member = z.infer<typeof MemberSchema>

export default MemberSchema;
