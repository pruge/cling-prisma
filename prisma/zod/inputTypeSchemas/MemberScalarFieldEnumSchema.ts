import { z } from 'zod';

export const MemberScalarFieldEnumSchema = z.enum(['id','name','email','tag','role','createdAt','updatedAt']);

export default MemberScalarFieldEnumSchema;
