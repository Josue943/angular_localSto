import { Component, OnInit,Input } from '@angular/core';
import { Task } from "../../models/Task";
import { TaskService } from "../../service/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: []
})
export class TaskComponent implements OnInit {
  @Input() task:Task;


  constructor(
    private _service:TaskService
  ) { }

  ngOnInit() {
  }

  deleteTask(task:Task){
    if(confirm("Are you sure you want to delete it?")){
      this._service.deleteTask(task)
    }
  
  }

}
