export class TaskEntity {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.createdAt = new Date();
    this.completed = false;
  }

  markAsCompleted(): void {
    this.completed = true;
    this.updatedAt = new Date();
  }
}
