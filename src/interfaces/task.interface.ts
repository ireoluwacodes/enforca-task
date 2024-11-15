export interface ITask {
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  completed?: boolean;
  users: string[];
}
