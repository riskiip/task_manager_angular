import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[];
  tasks: any[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((task: any[]) => {
        this.tasks = task;
      });
    });

    this.taskService.getLists().subscribe((lists: any[]) => {
      this.lists = lists;
    });
  }

  createNewList() {
    return this.taskService.createList('Tessst').subscribe((response: any) => {
      console.log(response);
    });
  }

}
