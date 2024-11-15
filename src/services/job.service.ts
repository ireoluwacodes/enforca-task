import { Job, JobApplication } from "../models";
import { IJob, IJobApplication } from "../interfaces";
import { ForbiddenRequestError } from "../exceptions";

export class JobService {
  private jobModel = Job;
  private jobApplicationModel = JobApplication;

  public async createJob(jobData: IJob): Promise<IJob> {
    const job = await this.jobModel.create(jobData);
    return job;
  }

  public async getAllJobs(): Promise<IJob[]> {
    const jobs = await this.jobModel.find().lean();
    return jobs;
  }

  public async updateJob(id: string, jobData: Partial<IJob>): Promise<IJob> {
    const job = await this.jobModel
      .findByIdAndUpdate(id, jobData, { new: true })
      .lean();
    if (!job) {
      throw new ForbiddenRequestError("Job not found");
    }
    return job;
  }

  public async deleteJob(id: string): Promise<void> {
    const job = await this.jobModel.findByIdAndDelete(id).lean();
    if (!job) {
      throw new ForbiddenRequestError("Job not found");
    }
  }

  public async applyForJob(
    userId: string,
    jobId: string,
  ): Promise<IJobApplication> {
    const application = await this.jobApplicationModel.create({
      user: userId,
      job: jobId,
    });
    return application;
  }

  public async getAllJobApplications(): Promise<IJobApplication[]> {
    const applications = await this.jobApplicationModel.find().lean();
    return applications;
  }
}
