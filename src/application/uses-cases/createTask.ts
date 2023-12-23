import { TaskInterface } from "../../domain/ports/task.interface";
import { TaskEntity } from "../../domain/entities/task.entity";
import { CreateTaskDto } from "../../domain/dtos/createTask.dto";

export class CreateTask {
  private taskRepository: TaskInterface;

  constructor(taskInterface: TaskInterface) {
    this.taskRepository = taskInterface;
  }
  async execute(taskData: CreateTaskDto): Promise<TaskEntity> {
    const { id, description } = taskData;
    const todo = new TaskEntity(id, description);
    await this.taskRepository.create(todo);
    return
  }
}
