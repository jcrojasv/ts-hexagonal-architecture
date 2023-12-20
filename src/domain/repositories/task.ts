import {Task} from "../entities/task";

export interface Task {
  create(task: Task): Promise<Task>;
  findById(uuid: string): Promise<Task>;
  findAll(): Promise<Task[]>;
  update(task: Task): Promise<Task>;
  delete(uuid: string): Promise<void>;
}
