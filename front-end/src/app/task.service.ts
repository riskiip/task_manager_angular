import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

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
}
