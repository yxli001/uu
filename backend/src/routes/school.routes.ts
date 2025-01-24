import { Router } from "express";
import * as schoolController from "src/controllers/school.controller";
import * as schoolValidator from "src/validators/school.validator";

const schoolRouter = Router();

schoolRouter.get("/", schoolController.getAllSchools);

schoolRouter.post(
  "/",
  schoolValidator.createSchoolValidator,
  schoolController.createSchool,
);

schoolRouter.patch(
  "/:id",
  schoolValidator.updateSchoolValidator,
  schoolController.updateSchool,
);

export default schoolRouter;
