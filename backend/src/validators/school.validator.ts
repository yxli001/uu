import { body } from "express-validator";

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

export const createSchoolValidator = [validateName, validateDomain];
