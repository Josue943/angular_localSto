import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../service/task.service";
import { Task } from "../../models/Task";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: []
})
export class TaskListComponent implements OnInit {

  tasks:Task[];
  constructor(
    private _service:TaskService
  ) { }

  ngOnInit() {
    this.tasks = this._service.getTasks();
  }

}
