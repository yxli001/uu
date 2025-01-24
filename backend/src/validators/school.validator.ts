import { body, param } from "express-validator";

const validateName = body("name")
  .exists()
  .withMessage("Name must be provided. ")
  .isString()
  .withMessage("Name must be a string. ")
  .trim()
  .notEmpty()
  .withMessage("Name must be non-empty string. ");

const validateDomain = body("domain")
  .exists()
  .withMessage("Domain must be provided. ")
  .isString()
  .withMessage("Domain must be a string. ")
  .trim()
  .notEmpty()
  .withMessage("Domain must be a non-empty string. ")
  .matches(/([a-z0-9|-]+\.)*[a-z0-9|-]+\.[a-z]+/)
  .withMessage("Domain must be a valid domain. ");

const validateId = param("id")
  .exists()
  .withMessage("ID must be provided. ")
  .isUUID()
  .withMessage("ID must be a UUID. ");

export const createSchoolValidator = [validateName, validateDomain];
export const updateSchoolValidator = [
  validateId,
  validateName.optional(),
  validateDomain.optional(),
];
