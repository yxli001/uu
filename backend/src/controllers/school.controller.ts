import asyncHandler from "express-async-handler";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import validationErrorParser from "src/util/validationErrorParser";
import createHttpError from "http-errors";

import School from "src/models/School.model";

type ICreateSchoolRequest = {
  name: string;
  domain: string;
};

type IUpdateSchoolRequest = Partial<ICreateSchoolRequest>;

// @desc Retrieve all schools
// @route GET /api/school
//
// @returns {School[]} 200 - Array of schools
export const getAllSchools: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
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

// @desc Update a school
// @route PATCH /api/school/:id
//
// @returns {School} 200 - The newly created school
export const updateSchool: RequestHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createHttpError(400, validationErrorParser(errors)));
    }

    // Extract validated data from the request body
    const schoolData = matchedData(req, {
      locations: ["body"],
    }) as IUpdateSchoolRequest;

    // Extract id from request parameters
    const { id } = matchedData(req, { locations: ["params"] }) as {
      id: string;
    };

    console.log(schoolData);

    // Verify at least one field is being updated
    if (Object.keys(schoolData).length === 0) {
      return next(createHttpError(400, "No fields to update. "));
    }

    try {
      // Update school in DB
      // affected is in the form [affectedCount: number, affectedRows: School[]]
      const affected = await School.update(schoolData, {
        where: {
          id: id,
        },
        returning: true,
        limit: 1,
      });

      res.status(200).json(affected[1][0]);
    } catch (error: unknown) {
      return next(error);
    }
  },
);
