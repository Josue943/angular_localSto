import { Injectable } from '@angular/core';
import { Task } from "../models/Task";
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasks:Task[];
  constructor() { 
 /*   this.tasks = [
      {title: 'write', description: 'I have to write',hide:true},
      {title: 'sleep', description: 'I have to sleep early',hide:true},
    ]*/
  }

  getTasks(){
    if(localStorage.getItem('tasks')===null){
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }
  
  }

  addTask(task:Task){
    this.tasks.push(task); //recargue el nuevo 


    let tasks = [];
    if(localStorage.getItem('tasks')===null){
      tasks.push(task)
      //para guardarlo se convierte a string
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }else{
      //caso contrario
      tasks = JSON.parse(localStorage.getItem('tasks'))
      tasks.push(task)
      localStorage.setItem('tasks',JSON.stringify(tasks))
    }
   
  }

  deleteTask(task){
    for(let i =0; i <this.tasks.length;i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i,1)
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
      }
    }

  }
}
