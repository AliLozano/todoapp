import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TasksAPIService} from "../../services/tasks-api.service";
import {Task} from "./interfaces";
import {AuthenticationService} from "../../config/authentication.service";
import {Router} from "@angular/router";


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

  async addTask() {
    await this.tasksApi.createTasks({ title: this.inputTask, done: false});
    this.tasks = await this.tasksApi.getTasks();
  }

  deleteTask(task: Task) {
    // TODO(HACER EL ELIMINAR)
    console.log(`Eliiminando ${task}`)
  }
}
