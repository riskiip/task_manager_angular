import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((task: Task[]) => {
        this.tasks = task;
      });
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClicked(task: Task) {
    // TODO: We want to make the task is completed when we click this button
    this.taskService.complete(task).subscribe( () => {
      console.log('Update task success');
      task.completed = !task.completed;
    });
  }

}
