import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequest: WebRequestService) { }

  createList(title: string) {
    return this.webRequest.post('lists', { title });
  }


  getLists() {
    return this.webRequest.get('lists');
  }

  getTasks(listId: string) {
    return this.webRequest.get(`lists/${listId}/tasks`);
  }


  createTask(title: string, listId: string) {
    return this.webRequest.post(`lists/${listId}/tasks`, { title });
  }

  complete(task: Task) {
    return this.webRequest.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
