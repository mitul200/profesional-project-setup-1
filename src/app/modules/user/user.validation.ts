import { z } from 'zod';

const userZodValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, { message: 'password cant be 20 charatrs' }),
  needsPasswordChange: z.string().optional(),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['in-progress', 'blocked']),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = { userZodValidationSchema };
