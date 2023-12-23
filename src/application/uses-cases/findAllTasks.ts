import {TaskInterface} from "../../domain/ports/task.interface";
import {TaskDto} from "../../domain/dtos/task.dto";

export class FindAllTasks {
  private taskRepository: TaskInterface;

  constructor(taskRepository: TaskInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(): Promise<TaskDto[]> {
    return await this.taskRepository.findAll();
  }
}
