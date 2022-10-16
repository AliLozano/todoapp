import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Task {
  done: boolean,
  title: string
}

export interface Fields {
  Status: string;
  Name: string;
}

export interface Record {
  id: string;
  createdTime: Date;
  fields: Fields;
}

export interface TasksResponse {
  records: Record[];
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = 'Mis Tareas 2';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() : void {

    const response = this.httpClient.get<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks?maxRecords=100&view=Grid%20view', {
      headers: {
        Authorization: 'Bearer keyJZUGC9aq6uKfqd'
      }
    })

    response.subscribe((it) => {
      this.tasks = it.records.map((it) => {
        return { title: it.fields.Name, done: it.fields.Status === 'Done'}
      });
      console.log(this.tasks);
    })

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
