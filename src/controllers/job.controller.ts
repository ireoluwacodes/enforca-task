import { NextFunction, Response } from "express";
import { CREATED, OK } from "http-status";
import { validateDbId } from "../utils";
import { JobService } from "../services";
import { ProtectedRequest } from "../interfaces";

const jobService = new JobService();

export class JobController {
  public async createJob(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const jobData = req.body;
      const job = await jobService.createJob(jobData);
      const data = {
        statusCode: CREATED,
        data: job,
        message: "Job Created Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async getAllJobs(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const jobs = await jobService.getAllJobs();
      const data = {
        statusCode: OK,
        data: jobs,
        message: "Jobs Retrieved Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async updateJob(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      await validateDbId(id);
      const jobData = req.body;
      const job = await jobService.updateJob(id, jobData);
      const data = {
        statusCode: OK,
        data: job,
        message: "Job Updated Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async deleteJob(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      await validateDbId(id);
      await jobService.deleteJob(id);
      const data = {
        statusCode: OK,
        message: "Job Deleted Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async applyForJob(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const userId = req.user?.sub as string;
      const { jobId } = req.body;
      await validateDbId(userId);
      await validateDbId(jobId);
      const application = await jobService.applyForJob(userId, jobId);
      const data = {
        statusCode: CREATED,
        data: application,
        message: "Job Application Submitted Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async getAllJobApplications(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const applications = await jobService.getAllJobApplications();
      const data = {
        statusCode: OK,
        data: applications,
        message: "Job Applications Retrieved Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}
