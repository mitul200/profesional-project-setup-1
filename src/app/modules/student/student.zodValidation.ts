import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(6, { message: 'First Name must be at least 6 characters long' })
    .max(10, { message: 'First Name cannot exceed 10 characters' })
    .refine(
      (value) => {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      { message: '{VALUE} is not in the correct format' },
    ),
  middleName: z.string().trim().min(1, { message: 'Middle Name is required' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last Name is required' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: '{VALUE} is not valid, please try another name',
    }),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContuctNumber: z
    .string()
    .trim()
    .min(1, { message: 'Father Contact Number is required' }),
  motherName: z.string().trim().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .trim()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContuctNumber: z
    .string()
    .trim()
    .min(1, { message: 'Mother Contact Number is required' }),
});

// Define the LocalGuardian schema
const localValidationGuardianSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Name is required' }),
  occupation: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Occupation is required' }),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Contact Number is required' }),
  adress: z
    .string()
    .trim()
    .min(1, { message: 'Local Guardian Address is required' }),
});

// Define the Student schema
const studentValidationSchema = z.object({
  id: z.string().trim().min(1, { message: 'Student ID is required' }),
  password: z.string().trim().max(30),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z
    .string()
    .trim()
    .min(1, { message: 'Date of Birth is required' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: '{VALUE} is not a valid email' }),
  contactNo: z
    .string()
    .trim()
    .min(1, { message: 'Contact Number is required' }),
  emergencyContactNumber: z
    .string()
    .trim()
    .min(1, { message: 'Emergency Contact Number is required' }),
  bloodGrp: z
    .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], {
      errorMap: () => ({ message: '{VALUE} is not a valid blood group' }),
    })
    .optional(),
  presentAdress: z
    .string()
    .trim()
    .min(1, { message: 'Present Address is required' }),
  parmanentAdress: z
    .string()
    .trim()
    .min(1, { message: 'Permanent Address is required' }),
  guardian: guardianValidationSchema,
  localGuardian: localValidationGuardianSchema,
  profileImg: z.string().trim().optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({ message: 'Status must be either active or blocked' }),
    })
    .default('active'),
  isDeleted: z.boolean().optional(),
});

export default studentValidationSchema;
