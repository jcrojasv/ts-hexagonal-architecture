import {CreateTaskDto} from "../dtos/createTask.dto";
import {TaskDto} from "../dtos/task.dto";
import {UpdateTaskDto} from "../dtos/updateTask.dto";

export interface TaskInterface {
  create(task: CreateTaskDto): Promise<TaskDto>;
  findById(uuid: string): Promise<TaskDto>;
  update(uuid: string, task: UpdateTaskDto): Promise<TaskDto>;
  delete(uuid: string): Promise<string>;
  findAll(): Promise<TaskDto[]>;
}
