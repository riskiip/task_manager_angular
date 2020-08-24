import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-taskt',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  listId: string;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.listId = params['listId'];
      console.log(this.listId);
    });
  }

  createNewTask(title: string) {
    return this.taskService.createTask(title, this.listId).subscribe( (newTask: Task) => {
      console.log(newTask);
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }

}
