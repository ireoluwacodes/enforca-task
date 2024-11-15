import { Router } from "express";
import { JobController } from "../controllers";
import { authMiddleware, successHandler, validator } from "../middleware";
import {
  createJobSchema,
  updateJobSchema,
  applyJobSchema,
} from "../validators";

const jobController = new JobController();

export const JobRouter = Router();

JobRouter.route("/jobs").post(
  authMiddleware,
  validator(createJobSchema),
  jobController.createJob,
  successHandler,
);

JobRouter.route("/jobs").get(
  authMiddleware,
  jobController.getAllJobs,
  successHandler,
);

JobRouter.route("/jobs/:id").put(
  authMiddleware,
  validator(updateJobSchema),
  jobController.updateJob,
  successHandler,
);

JobRouter.route("/jobs/:id").delete(
  authMiddleware,
  jobController.deleteJob,
  successHandler,
);

JobRouter.route("/jobs/apply").post(
  authMiddleware,
  validator(applyJobSchema),
  jobController.applyForJob,
  successHandler,
);

JobRouter.route("/job-applications").get(
  authMiddleware,
  jobController.getAllJobApplications,
  successHandler,
);
