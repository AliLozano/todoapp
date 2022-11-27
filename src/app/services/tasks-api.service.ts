import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map, Observable} from "rxjs";
import {TasksResponse, Task, TaskRecord} from "../pages/todo-card/interfaces";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "../config/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class TasksAPIService {

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) {
  }

  async getTasks(): Promise<Task[]> {
    const response = await firstValueFrom(this.httpClient.get<Task[]>(`${environment.apiUrl}/api/tasks/`, {
      headers: {
        Authorization: '' + this.authenticationService.getUser()?.token
      }
    }))
    return response;
  }

  async createTasks(task: Task): Promise<void> {
    await firstValueFrom(this.httpClient.post<Task>(`${environment.apiUrl}/api/tasks/`, task, {
      headers: {
        Authorization: '' + this.authenticationService.getUser()?.token
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

  async updateTask(task: Task) {
    await firstValueFrom(this.httpClient.post<Task>(`${environment.apiUrl}/api/tasks/update`, task, {
      headers: {
        Authorization: '' + this.authenticationService.getUser()?.token
      }
    }))
  }
}
