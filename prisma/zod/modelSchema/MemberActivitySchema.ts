import { z } from 'zod';

/////////////////////////////////////////
// MEMBER ACTIVITY SCHEMA
/////////////////////////////////////////

export const MemberActivitySchema = z.object({
  id: z.string(),
  userId: z.string(),
})

export type MemberActivity = z.infer<typeof MemberActivitySchema>

export default MemberActivitySchema;
