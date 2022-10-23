import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map, Observable} from "rxjs";
import {TasksResponse, Task} from "../pages/todo-card/interfaces";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TasksAPIService {

  constructor(private httpClient: HttpClient) {
  }

  async getTasks(): Promise<Task[]> {
    const response = await firstValueFrom(this.httpClient.get<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks?maxRecords=100&view=Grid%20view', {
      headers: {
        Authorization: `Bearer ${environment.airtableKey}`
      }
    }))
    return response.records.map((it) => {
      return {title: it.fields.Name, done: it.fields.Status === 'Done'}
    });
  }

  async createTasks(task: Task): Promise<void> {
    await firstValueFrom(this.httpClient.post<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks',
      {
        "records": [
          {
            "fields": {
              "Name": task.title,
              "Status": task.done ? "Done" : "In progress"
            }
          }
        ]
      },
      {
      headers: {
        Authorization: `Bearer ${environment.airtableKey}`
      }
    }))
  }



  /*
  getTasks(): Observable<Task[]> {
    const response = this.httpClient.get<TasksResponse>('https://api.airtable.com/v0/appqD6eBxxY65Joqn/Tasks?maxRecords=100&view=Grid%20view', {
      headers: {
        Authorization: 'Bearer keyJZUGC9aq6uKfqd'
      }
    })

    return response.pipe(map((it) => {
      return it.records.map((it) => {
        return {title: it.fields.Name, done: it.fields.Status === 'Done'}
      });
    }))
  }
  */

}
