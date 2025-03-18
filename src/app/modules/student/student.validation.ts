/* eslint-disable prettier/prettier */
import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .custom((value, helpers) => {
      const firstNameStr =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (firstNameStr !== value) {
        return helpers.error('any.invalid', { value });
      }
      return value;
    }, 'Capitalization validation')
    .min(6)
    .max(10)
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'any.required': 'First Name is required',
      'string.min': 'First Name must be at least 6 characters long',
      'string.max': 'First Name cannot exceed 10 characters',
      'any.invalid': '{#value} is not in the correct format',
    }),
  middleName: Joi.string().trim().required().messages({
    'string.base': 'Middle Name must be a string',
    'string.empty': 'Middle Name is required',
    'any.required': 'Middle Name is required',
  }),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.base': 'Last Name must be a string',
      'string.empty': 'Last Name is required',
      'any.required': 'Last Name is required',
      'string.pattern.base': '{#value} is not valid, please try another name',
    }),
});

// Define the Guardian schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.base': 'Father Name must be a string',
    'string.empty': 'Father Name is required',
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Father Occupation must be a string',
    'string.empty': 'Father Occupation is required',
    'any.required': 'Father Occupation is required',
  }),
  fatherContuctNumber: Joi.string().trim().required().messages({
    'string.base': 'Father Contact Number must be a string',
    'string.empty': 'Father Contact Number is required',
    'any.required': 'Father Contact Number is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.base': 'Mother Name must be a string',
    'string.empty': 'Mother Name is required',
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().trim().required().messages({
    'string.base': 'Mother Occupation must be a string',
    'string.empty': 'Mother Occupation is required',
    'any.required': 'Mother Occupation is required',
  }),
  motherContuctNumber: Joi.string().trim().required().messages({
    'string.base': 'Mother Contact Number must be a string',
    'string.empty': 'Mother Contact Number is required',
    'any.required': 'Mother Contact Number is required',
  }),
});

// Define the LocalGuardian schema
const localGuardianSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Name must be a string',
    'string.empty': 'Local Guardian Name is required',
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Occupation must be a string',
    'string.empty': 'Local Guardian Occupation is required',
    'any.required': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Contact Number must be a string',
    'string.empty': 'Local Guardian Contact Number is required',
    'any.required': 'Local Guardian Contact Number is required',
  }),
  adress: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian Address must be a string',
    'string.empty': 'Local Guardian Address is required',
    'any.required': 'Local Guardian Address is required',
  }),
});

// Define the Student schema
const studentValidationJoiSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.base': 'Student ID must be a string',
    'string.empty': 'Student ID is required',
    'any.required': 'Student ID is required',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string()
    .trim()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'string.base': 'Gender must be a string',
      'string.empty': 'Gender is required',
      'any.required': 'Gender is required',
      'any.only':
        '{#value} is not supported. Gender must be one of: male, female, other',
    }),
  dateOfBirth: Joi.string().trim().required().messages({
    'string.base': 'Date of Birth must be a string',
    'string.empty': 'Date of Birth is required',
    'any.required': 'Date of Birth is required',
  }),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
    'string.email': '{#value} is not a valid email',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Contact Number must be a string',
    'string.empty': 'Contact Number is required',
    'any.required': 'Contact Number is required',
  }),
  emergencyContactNumber: Joi.string().trim().required().messages({
    'string.base': 'Emergency Contact Number must be a string',
    'string.empty': 'Emergency Contact Number is required',
    'any.required': 'Emergency Contact Number is required',
  }),
  bloodGrp: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .messages({
      'string.base': 'Blood Group must be a string',
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAdress: Joi.string().trim().required().messages({
    'string.base': 'Present Address must be a string',
    'string.empty': 'Present Address is required',
    'any.required': 'Present Address is required',
  }),
  parmanentAdress: Joi.string().trim().required().messages({
    'string.base': 'Permanent Address must be a string',
    'string.empty': 'Permanent Address is required',
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string().trim().messages({
    'string.base': 'Profile Image must be a string',
  }),
  isActive: Joi.string()
    .trim()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'string.base': 'Status must be a string',
      'any.only':
        '{#value} is not supported. Status must be either active or blocked',
    }),
});

export default studentValidationJoiSchema;
