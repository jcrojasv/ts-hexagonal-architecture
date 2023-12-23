import { TaskInterface } from "../../domain/ports/task.interface";
import {TaskDto} from "../../domain/dtos/task.dto";


export class CreateTask {
  private taskRepository: TaskInterface;

  constructor(taskInterface: TaskInterface) {
    this.taskRepository = taskInterface;
  }
  async execute(uuid: string): Promise<TaskDto> {
    let tasksList: TaskDto;
    tasksList = await this.taskRepository.findById(uuid);
    return tasksList;
  }
}
