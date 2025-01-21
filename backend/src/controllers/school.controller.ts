import asyncHandler from "express-async-handler";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import validationErrorParser from "src/util/validationErrorParser";
import createHttpError from "http-errors";

import School from "src/models/School.model";

interface ICreateSchoolRequest {
  name: string;
  domain: string;
}

// @desc Retrieve all schools
// @route GET /api/school
//
// @returns {School[]} 200 - Array of schools
export const getAllSchools: RequestHandler = asyncHandler(
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      // Retrieve all schools from the database, including associated users
      const applications = await School.findAll();

      res.status(200).json(applications);
    } catch (error: unknown) {
      return next(error);
    }
  },
);

// @desc Create a new school
// @route POST /api/school
//
// @returns {School} 200 - The newly created school
export const createSchool: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createHttpError(400, validationErrorParser(errors)));
    }

    // Extract validated data from the request body
    const schoolData = matchedData(req) as ICreateSchoolRequest;

    // Create a new School object
    const school = new School(schoolData);

    try {
      // Save the new school to the database
      const savedSchool = await school.save();

      res.status(200).json(savedSchool);
    } catch (error: unknown) {
      return next(error);
    }
  },
);
