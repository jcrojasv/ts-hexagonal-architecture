import {TaskInterface} from "../../domain/ports/task.interface";

export class DeleteTask {
  private taskRepository: TaskInterface;
  constructor(taskRepository: TaskInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(uuid: string): Promise<string | Error> {
    if (! await this.taskRepository.findById(uuid)) {
      return new Error("Task does not exist");
    }
    await this.taskRepository.delete(uuid);
    return uuid;
  }
}
