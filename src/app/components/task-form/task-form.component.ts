import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styles: []
})
export class TaskFormComponent implements OnInit {

  constructor(
    private _service:TaskService
  ) { }

  ngOnInit() {
  }
//htmlinputelement
  addTask(title,description){  

   this._service.addTask({
     title:title.value,
     description: description.value,
     hide:true
   })
   title.value=''
   description.value=''
   title.focus()
    return false;
  }


}
