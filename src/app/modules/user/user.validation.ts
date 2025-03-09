import { z } from 'zod';

const userZodValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must be a string' })
    .max(20, { message: 'password cant be 20 charatrs' })
    .optional(),
});

export const UserValidation = { userZodValidationSchema };
