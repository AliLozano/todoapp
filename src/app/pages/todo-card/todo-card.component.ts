import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TasksAPIService} from "./tasks-api.service";
import {Task} from "./interfaces";


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = 'Mis Tareas 2';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor(private tasksApi: TasksAPIService) {
  }

  async ngOnInit() : Promise<void> {
    this.tasks = await this.tasksApi.getTasks()

    // this.tasks.push({ title: 'Comprar gomitas', done: false});
    // this.tasks.push({ title: 'Conseguir dinero para las gomitas', done: true});

  }

  ngOnDestroy() {

  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    // TODO(HACER EL ELIMINAR)
    console.log(`Eliiminando ${task}`)
  }
}
