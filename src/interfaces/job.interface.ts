export interface IJob {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: number;
  postedDate?: Date;
  applicationDeadline?: Date;
  requirements?: string[];
  responsibilities?: string[];
}
