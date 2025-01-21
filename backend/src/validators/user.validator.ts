import { body } from "express-validator";

const validateFirstName = body("firstName")
  .exists()
  .withMessage("First name must be provided. ")
  .isString()
  .withMessage("First name must be a string. ")
  .trim()
  .notEmpty()
  .withMessage("First name must be non-empty string. ")
  .matches(/^[a-z ,.'-]+$/i)
  .withMessage("First name must be a valid name.");

const validateLastName = body("lastName")
  .exists()
  .withMessage("Last name must be provided. ")
  .isString()
  .withMessage("Last name must be a string. ")
  .trim()
  .notEmpty()
  .withMessage("Last name must be non-empty string. ")
  .matches(/^[a-z ,.'-]+$/i)
  .withMessage("Last name must be a valid name.");

const validateEmail = body("email")
  .exists()
  .withMessage("Email must be provided. ")
  .isEmail()
  .withMessage("Email must be valid email. ")
  .normalizeEmail();

const validateSchoolId = body("schoolId")
  .exists()
  .withMessage("School ID must be provided. ")
  .isUUID()
  .withMessage("School ID must be a valid UUID. ");

export const createUserValidator = [
  validateFirstName,
  validateLastName,
  validateEmail,
  validateSchoolId,
];
