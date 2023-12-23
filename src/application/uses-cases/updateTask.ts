import {TaskInterface} from "../../domain/ports/task.interface";
import {UpdateTaskDto} from "../../domain/dtos/updateTask.dto";
import {TaskDto} from "../../domain/dtos/task.dto";

export class UpdateTask {
  private taskRepository: TaskInterface;
  constructor(taskRepository: TaskInterface) {
    this.taskRepository = taskRepository;
  }

  async execute(updateData: UpdateTaskDto): Promise<TaskDto | Error> {
    const actualTaskData: TaskDto = await this.taskRepository.findById(updateData.uuid);
    if (!actualTaskData) {
      return new Error("Task doesn't exist");
    }
    const updatedAt = new Date();
    const updateDataTask = {...actualTaskData, ... updatedAt, description: updateData.description };

    return await this.taskRepository.update(
      updateData.uuid,
      updateDataTask
    )
  }
}
